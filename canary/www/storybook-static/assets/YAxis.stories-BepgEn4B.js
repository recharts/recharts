import{R as t}from"./iframe-CwjnBdPJ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BJPBUcLn.js";import{R as h}from"./zIndexSlice-DCK0oMjs.js";import{L as A}from"./LineChart-78NyXzRo.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Bt64PR7p.js";import{X as f}from"./XAxis-DGiS1jyS.js";import{L as E}from"./Legend-hOsISys7.js";import{L as i}from"./Line-BtP8MguI.js";import{T as v}from"./Tooltip-B0A_l91o.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-DUPKJ4wq.js";import"./Text-CkJvnqMb.js";import"./resolveDefaultProps-CiT0yrYA.js";import"./pageBackground-CPZsdU6n.js";import"./isWellBehavedNumber-UCnnTJQS.js";import"./useId-LApi4aFA.js";import"./useBackwardsCompatibleTheme-BaLhcLyB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cf72LToz.js";import"./index-Dd-h_ysm.js";import"./index-BjJumBGZ.js";import"./dataEntryStyles-MXIeXXjf.js";import"./axisSelectors-yVNmvCZQ.js";import"./throttle-NOTipQ48.js";import"./d3-scale-B8EUKI5D.js";import"./CartesianAxis-BCC92CcD.js";import"./Layer-mPZxMc5S.js";import"./types-Bf6WAwuG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-dymauRC4.js";import"./index-CmMtCp92.js";import"./index-D5HInSgc.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DssFoHZN.js";import"./index-Bgw_dChb.js";import"./CartesianChart-CAYSFbYO.js";import"./chartDataContext-Caz9nZMs.js";import"./CategoricalChart-C1fI2_Bl.js";import"./Symbols-XtZsXKyx.js";import"./symbol-pwE7MqIW.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BUBjRfVb.js";import"./uniqBy-DM5ILEe5.js";import"./iteratee-BCmgj2Iv.js";import"./isArguments-yB-y1yaH.js";import"./Curve-_mg3fY-T.js";import"./step-_ilYVkYV.js";import"./activeStyles-Dq37JbhA.js";import"./useAnimationId-CsReVCtf.js";import"./ActivePoints-B-LCBBeH.js";import"./Dot-j5DVnIjt.js";import"./RegisterGraphicalItemId-D_0UWgiO.js";import"./ErrorBarContext-Dx-lWvRW.js";import"./GraphicalItemClipPath-BaNkPOAO.js";import"./SetGraphicalItem-r-YteBa3.js";import"./getRadiusAndStrokeWidthFromDot-B0N-TNeB.js";import"./ActiveShapeUtils-5uA1VhfG.js";import"./useEffectiveDataKey-Cb7tOd6S.js";import"./Cross-CU2uWUVS.js";import"./Rectangle-CYb6tTOo.js";import"./util-Dxo8gN5i.js";import"./Sector-BzlkSSva.js";const zt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Bt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: (args: Args) => {
    const width = getWidth(args.width);
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart width={600} height={300} data={coordinateWithValueData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis />
          <YAxis {...args} width={width} />
          <Legend />
          <Line dataKey="y" />
          <Tooltip />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    dataKey: 'pv',
    domain: [0, 300],
    type: 'number',
    allowDataOverflow: true,
    tickMargin: 20,
    angle: 45,
    width: '120',
    label: {
      value: 'The Axis Label',
      position: 'center',
      angle: 90
    }
  }
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;n.parameters={...n.parameters,docs:{...(d=n.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: (args: Args) => {
    const sampleData = [{
      category: 'Product A',
      value: 400,
      target: 450
    }, {
      category: 'Product B',
      value: 300,
      target: 350
    }, {
      category: 'Product C',
      value: 200,
      target: 250
    }, {
      category: 'Product D',
      value: 278,
      target: 300
    }, {
      category: 'Product E',
      value: 189,
      target: 220
    }];
    return <ResponsiveContainer width="100%" height={500}>
        <LineChart data={sampleData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="category" />
          <YAxis {...args} tick={<CustomYAxisTickWithPadding />} width={100} />
          <Line type="monotone" dataKey="value" stroke="#3498db" name="Actual" />
          <Line type="monotone" dataKey="target" stroke="#e74c3c" strokeDasharray="5 5" name="Target" />
          <Tooltip />
          <Legend />
        </LineChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(YAxisArgs),
    padding: {
      top: 25,
      bottom: 35
    },
    width: 100,
    tickMargin: 10
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Bt as __namedExportsOrder,zt as default};
