import{R as t}from"./iframe-DVXtBbhv.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-e33_-5yv.js";import{R as h}from"./zIndexSlice-CRXmCTqm.js";import{L as A}from"./LineChart-B7Mg6udk.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BkgNejfq.js";import{X as f}from"./XAxis-BQ7gOxOo.js";import{L as E}from"./Legend-Dlxza6ak.js";import{L as i}from"./Line-ZRT5g1vt.js";import{T as v}from"./Tooltip-DWV6q4l_.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-5Ji-gJCy.js";import"./Text-vABaHyza.js";import"./resolveDefaultProps-eZCAl6aH.js";import"./DOMUtils-BAyS9uvf.js";import"./ZIndexLayer-CLiiJgzL.js";import"./index-kgrSM8GI.js";import"./index-HiZVMws2.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Jcl3obl_.js";import"./throttle-CSTRLONy.js";import"./axisSelectors-M5GsU3rg.js";import"./d3-scale-Ctk2L_AK.js";import"./CartesianAxis-BnuaOFtw.js";import"./Layer-DvCe8pYL.js";import"./types-DRd1AoLJ.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-ZV6qlBU2.js";import"./index-BfyWBC3f.js";import"./index-CMkKBRRd.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-AdQm7Ax9.js";import"./index-BZygq-Tx.js";import"./fillDefinitions-RTxS13Os.js";import"./CartesianChart-AaBKVVVh.js";import"./ZIndexPortal-D-pQJaCe.js";import"./CategoricalChart-DkOrwY__.js";import"./Symbols-_bj5ojYc.js";import"./symbol-w9HomPlm.js";import"./path-DyVhHtw_.js";import"./useElementOffset-R8U0hgkF.js";import"./uniqBy-DRpOlyJe.js";import"./iteratee-BH10e2Wz.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Cv9dH7Wv.js";import"./step-CaWVPUsr.js";import"./LabelList-h2AkLue_.js";import"./ActivePoints-COJ33MUQ.js";import"./Dot-C4qnCcQo.js";import"./activeStyles-C5r4Jq_u.js";import"./useAnimationId-mwIlAEpa.js";import"./dataEntryStyles-aRHeEgvk.js";import"./ErrorBarContext-DvlMCK3a.js";import"./SetGraphicalItem-DIzHPpXP.js";import"./getRadiusAndStrokeWidthFromDot-CoVHwyP0.js";import"./ActiveShapeUtils-nIAhhh4O.js";import"./useEffectiveDataKey-sNV4f9xq.js";import"./Cross-Bk3jg-xs.js";import"./Rectangle-DWRYsjhQ.js";import"./util-Dxo8gN5i.js";import"./Sector-Di21Oj5C.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
