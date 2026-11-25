import{R as t}from"./iframe-KA27XLgH.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-I2w3cHIn.js";import{Y as s}from"./YAxis-Db8yqFFW.js";import{R as h}from"./zIndexSlice-B5jZTfpG.js";import{L as A}from"./LineChart-COc8OIJ2.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Df2RxOFB.js";import{X as f}from"./XAxis-BELMhMr5.js";import{L as E}from"./Legend-DFonRB3y.js";import{L as i}from"./Line-BBMiCx56.js";import{T as v}from"./Tooltip-C4bYXqBt.js";import"./preload-helper-Dp1pzeXC.js";import"./resolveDefaultProps-DljT9-ag.js";import"./get-CjriyByo.js";import"./Label-B69AByr3.js";import"./Text-8iqEDvQJ.js";import"./ZIndexLayer-R6ZlJQ0g.js";import"./index-CkBS2fzk.js";import"./index-Ckg884lQ.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-C3Tv-TSh.js";import"./throttle-CoiFOdIR.js";import"./axisSelectors-C9UcFeRr.js";import"./d3-scale-C3G3_Gqb.js";import"./CartesianAxis-DSAJb9yU.js";import"./Layer-MjJu6ARy.js";import"./types-CQ5wDBZk.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-m7yN3OkN.js";import"./index-DRgQ1v-L.js";import"./index-DjOzCNYa.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-TR_xYtI_.js";import"./index-B2SGDklF.js";import"./fillDefinitions-BQM9erML.js";import"./CartesianChart-fWhWe39l.js";import"./chartDataContext-BllWN6wY.js";import"./CategoricalChart-Bne8SWuB.js";import"./Symbols-CazKqwF3.js";import"./symbol-CGclnZ-V.js";import"./path-BBMZd4YL.js";import"./useElementOffset-BBAHP-Sy.js";import"./uniqBy-BPMiXjHD.js";import"./iteratee-CUUDCjTn.js";import"./isArguments-yB-y1yaH.js";import"./getRadiusAndStrokeWidthFromDot-BbOzSNOE.js";import"./Curve-C0q5au3B.js";import"./step-Dw4WzDeI.js";import"./dataEntryStyles-CRFv6Bpc.js";import"./ActivePoints-deQG4rJH.js";import"./Dot-CKQX6HZM.js";import"./activeStyles-Rsdle8Gs.js";import"./useAnimationId-ByBbFw3W.js";import"./ErrorBarContext-DNhP_BG0.js";import"./SetGraphicalItem-gJWf9_t-.js";import"./ActiveShapeUtils-BAOEM0H-.js";import"./useEffectiveDataKey-BN70kZIV.js";import"./Cross-DiQMcTkm.js";import"./Rectangle-D_gP81X4.js";import"./util-Dxo8gN5i.js";import"./Sector-CH1VJLUF.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},jt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,jt as __namedExportsOrder,Ot as default};
