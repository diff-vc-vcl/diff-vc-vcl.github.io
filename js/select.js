/*Dropdown Menu*/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});
/*End Dropdown Menu*/

$('.dropdown-menu.conversion li').click(function () {
	var folder = $(this).parents('.dropdown').find('input').val();
	var vcpairhtml = ' \
	<table class="wrapper"> \
		<tbody style="margin-right: auto; text-align: center;"> \
			<tr> \
				<td><br></td> \
				<td><b>Source</b></td> \
				<td><b>Target</b></td> \
				<td></td> \
			</tr> \
			<tr> \
				<td></td> \
				<td><audio controls=""><source src="resources/audio/conversion/' + folder + '/source.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/conversion/' + folder + '/target.wav"></audio></td> \
				<td></td> \
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td></td>\
				<td>FS-PPG-VC</td> \
                <td><a href="https://github.com/liusongxiang/ppg-vc">BNE-PPG-VC</a></td> \
                <td>Ours</td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;"><i style="font-weight: 700;">FSL</i>:</td> \
				<td><audio controls=""><source src="resources/audio/conversion/' + folder + '/ppgvc2_fsl.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/conversion/' + folder + '/ppgvc1_fsl.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/conversion/' + folder + '/diffvc_fsl.wav"></audio></td> \
				<td></td> \
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
		</tbody> \
	</table> \
	';
	$('.vcpair').html(vcpairhtml + '</div>');
});

var speakers = {
	'p231': {
	    name: 'p231',
	    pairs: [
            {folder: 'p231', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            {folder: 'p231_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p237':{ 
		name: 'p237',
		pairs: [
            {folder: 'p237', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold of the end of the rainbow'},
            {folder: 'p237_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p243':{ 
		name: 'p243',
		pairs: [
            {folder: 'p243', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold of the end of the rainbow'},
            {folder: 'p243_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p246':{ 
		name: 'p246',
		pairs: [
            {folder: 'p246', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold of the end of the rainbow'},
            {folder: 'p246_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p250':{ 
		name: 'p250',
		pairs: [
            {folder: 'p250', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold of the end of the rainbow'},
            {folder: 'p250_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p272':{ 
		name: 'p272',
		pairs: [
            {folder: 'p272', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold of the end of the rainbow'},
            {folder: 'p272_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p294':{ 
		name: 'p294',
		pairs: [
            {folder: 'p294', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold of the end of the rainbow'},
            {folder: 'p294_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p302':{ 
		name: 'p302',
		pairs: [
            {folder: 'p302', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold of the end of the rainbow'},
            {folder: 'p302_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p334':{ 
		name: 'p334',
		pairs: [
            {folder: 'p334', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold of the end of the rainbow'},
            {folder: 'p334_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p343':{ 
		name: 'p343',
		pairs: [
            {folder: 'p343', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold of the end of the rainbow'},
            {folder: 'p343_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	}
};

$('.dropdown-menu.cloning li').click(function () {

	var speaker = speakers[$(this).parents('.dropdown').find('input').val()];
	var cloning_table_html = ' \
	    <table class="wrapper smaller_audio"> \
            <tbody style="margin-right: auto; text-align: center;"> \
                <tr> \
                    <td></td> \
                    <td><b>' + speaker.name + '</b></td> \
                    <td></td> \
                </tr> \
                <tr> \
                    <td></td> \
                    <td><audio controls="" src="resources/audio/cloning/' + speaker.pairs[0].folder + '/target.wav"><source src=""></audio></td>  \
                </tr> \
                <tr> \
            		<td><br></td> \
        		</tr>'
    speaker.pairs.forEach(function (pair){
    	cloning_table_html += ' \
    	<tr> \
    	    <td></td> \
	    	<td colspan="8" class="table_text"> <b> Text: </b>' + pair.text + '</td> \
        </tr> \
        <tr> \
            <td><br></td> \
        </tr> \
        <tr> \
            <td></td> \
            <td><a href="https://github.com/KevinMIN95/StyleSpeech">StyleSpeech</a></td> \
            <td>FastSpeech</td> \
            <td>Tacotron-SMA</td> \
            <td>Grad-TTS</td> \
            <td>Ours</td> \
        </tr> \
        <tr> \
            <td style="font-size: medium; text-align: right;"><i style="font-weight: 700;">FSL</i>:</td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/stylespeech_fsl.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/fs_fsl.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/sma_fsl.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/gradtts_fsl.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/diffvc_fsl.wav"></audio></td> \
            <td></td> \
        </tr> \
        <tr> \
            <td><br></td> \
        </tr>'
    })
                        
    cloning_table_html += '</tbody></table>';
	$('.wrapper_cloning').html('<div>'+cloning_table_html+'</div>');
})


var additional_speakers = {
	'scarlett': {
	    name: 'scarlett',
	    pairs: [
            {folder: 'scarlett', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            {folder: 'scarlett_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'scarlett_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'amanda2':{ 
		name: 'amanda',
		pairs: [
            {folder: 'amanda2', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            {folder: 'amanda2_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'amanda2_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'john2':{ 
		name: 'john',
		pairs: [
            {folder: 'john2', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            {folder: 'john2_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'john2_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'rachel':{ 
		name: 'rachel',
		pairs: [
            {folder: 'rachel', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            {folder: 'rachel_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'rachel_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'thomas':{ 
		name: 'thomas',
		pairs: [
            {folder: 'thomas', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            {folder: 'thomas_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'thomas_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'arthur':{ 
		name: 'arthur',
		pairs: [
            {folder: 'arthur', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            {folder: 'arthur_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'arthur_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	}
}

$('.dropdown-menu.cloning_additional li').click(function () {

	var speaker = additional_speakers[$(this).parents('.dropdown').find('input').val()];
	var cloning_table_html = ' \
	    <table class="wrapper smaller_audio"> \
            <tbody style="margin-right: auto; text-align: center;"> \
                <tr> \
                    <td></td> \
                    <td><b>' + speaker.name + '</b></td> \
                    <td></td> \
                </tr> \
                <tr> \
                    <td></td> \
                    <td><audio controls="" src="resources/audio/cloning/' + speaker.pairs[0].folder + '/target.wav"><source src=""></audio></td>  \
                </tr> \
                <tr> \
            		<td><br></td> \
        		</tr> '
    speaker.pairs.forEach(function (pair){
    	cloning_table_html += ' \
    	<tr> \
    	    <td></td> \
	    	<td colspan="8" class="table_text"> <b> Text: </b>' + pair.text + '</td> \
        </tr> \
        <tr> \
            <td><br></td> \
        </tr> \
        <tr> \
            <td></td> \
            <td><a href="https://github.com/KevinMIN95/StyleSpeech">StyleSpeech</a></td> \
            <td>FastSpeech</td> \
            <td>Tacotron-SMA</td> \
            <td>Grad-TTS</td> \
            <td>Ours</td> \
        </tr> \
        <tr> \
            <td style="font-size: medium; text-align: right;"><i style="font-weight: 700;">FSL</i>:</td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/stylespeech_fsl.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/fs_fsl.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/sma_fsl.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/gradtts_fsl.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/diffvc_fsl.wav"></audio></td> \
            <td></td> \
        </tr> \
        <tr> \
            <td><br></td> \
        </tr>'
    })
                        
    cloning_table_html += '</tbody></table>';
	$('.wrapper_cloning_additional').html('<div>'+cloning_table_html+'</div>');
})


var dataset_len_speakers = {
	'scarlett': {
	    name: 'scarlett',
	    pairs: [
            {folder: 'scarlett', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            // {folder: 'scarlett_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'scarlett_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p225':{ 
		name: 'p225',
		pairs: [
            {folder: 'p225', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            // {folder: 'amanda2_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'p225_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p229':{ 
		name: 'p229',
		pairs: [
            {folder: 'p229', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            // {folder: 'amanda2_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'p229_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p231':{ 
		name: 'p231',
		pairs: [
            {folder: 'p231', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            // {folder: 'john2_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'p231_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p233':{ 
		name: 'p233',
		pairs: [
            {folder: 'p233', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            // {folder: 'rachel_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'p233_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p243':{ 
		name: 'p243',
		pairs: [
            {folder: 'p243', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            // {folder: 'thomas_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'p243_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p253':{ 
		name: 'p253',
		pairs: [
            {folder: 'p253', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            // {folder: 'thomas_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'p253_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	},
	'p261':{ 
		name: 'p261',
		pairs: [
            {folder: 'p261', text: 'When a man looks for something beyond his reach, his friends say he is looking for the pot of gold at the end of the rainbow.'},
            // {folder: 'arthur_2', text: "Does Jane know about your new job? No, and don't you dare tell her! She will be furious!"},
            {folder: 'p261_4', text: 'Throughout the centuries people have explained the rainbow in various ways.'}
		]
	}
}

$('.dropdown-menu.cloning_dataset_len li').click(function () {

	var speaker = dataset_len_speakers[$(this).parents('.dropdown').find('input').val()];
	var cloning_table_html = ' \
	    <table class="wrapper smaller_audio"> \
            <tbody style="margin-right: auto; text-align: center;"> \
                <tr> \
                    <td></td> \
                    <td><b>' + speaker.name + '</b></td> \
                    <td></td> \
                </tr> \
                <tr> \
                    <td></td> \
                    <td><audio controls=""><source src="resources/audio/dataset_len_test/' + speaker.pairs[0].folder + '/target.wav"></audio></td> \
                </tr> \
                <tr> \
                    <td><br></td> \
                </tr>'
    speaker.pairs.forEach(function (pair){
    	cloning_table_html += ' \
    	<tr> \
    	    <td></td> \
	    	<td colspan="8" class="table_text"> <b> Text: </b>' + pair.text + '</td> \
        </tr> \
        <tr> \
            <td><br></td> \
        </tr> \
        <tr> \
            <td></td> \
            <td>5s</td> \
            <td>15s</td> \
            <td>30s</td> \
            <td>60s</td> \
        </tr> \
        <tr> \
            <td style="font-size: medium; text-align: right;"><i style="font-weight: 700;">FSL</i>:</td> \
            <td><audio controls=""><source src="resources/audio/dataset_len_test/' + pair.folder + '/5s.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/dataset_len_test/' + pair.folder + '/15s.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/dataset_len_test/' + pair.folder + '/30s.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/dataset_len_test/' + pair.folder + '/60s.wav"></audio></td> \
            <td></td> \
        </tr> \
        <tr> \
            <td><br></td> \
        </tr>'
    })
                        
    cloning_table_html += '</tbody></table>';
	$('.wrapper_cloning_dataset_len').html('<div>'+cloning_table_html+'</div>');
})