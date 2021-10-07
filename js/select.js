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
				<td><a href="https://github.com/Wendison/VQMIVC">VQMIVC</a></td> \
                <td><a href="https://github.com/liusongxiang/ppg-vc">BNE-PPG-VC</a></td> \
                <td>Ours</td> \
			</tr> \
			<tr> \
				<td style="font-size: medium; text-align: right;"><i style="font-weight: 700;">ZSL</i>:</td> \
				<td><audio controls=""><source src="resources/audio/conversion/' + folder + '/vqmivc_zsl.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/conversion/' + folder + '/ppgvc1_zsl.wav"></audio></td> \
				<td><audio controls=""><source src="resources/audio/conversion/' + folder + '/diffvc_zsl.wav"></audio></td> \
			</tr> \
			<tr> \
				<td><br></td> \
			</tr> \
			<tr> \
				<td></td>\
				<td><a href="https://github.com/Wendison/VQMIVC">FS-PPG-VC</a></td> \
                <td>BNE-PPG-VC</a></td> \
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
                </tr>'
    speaker.pairs.forEach(function (pair){
    	cloning_table_html += ' \
    	<tr> \
            <td><br></td> \
        </tr> \
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
            <td>FastSpeech</a></td> \
            <td>Tacotron-SMA</td> \
            <td>Grad-TTS</td> \
            <td>Ours</td> \
        </tr> \
        <tr> \
            <td style="font-size: medium; text-align: right;"><i style="font-weight: 700;">ZSL</i>:</td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/stylespeech_zsl.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/fs_zsl.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/sma_zsl.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/gradtts_zsl.wav"></audio></td> \
            <td><audio controls=""><source src="resources/audio/cloning/' + pair.folder + '/diffvc_zsl.wav"></audio></td> \
        </tr> \
        <tr> \
            <td><br></td> \
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