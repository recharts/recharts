import{R as t}from"./iframe-C9f0XnT9.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-D9OAInhW.js";import{R as h}from"./zIndexSlice-CHa-NfW0.js";import{L as A}from"./LineChart-DgnzRfGQ.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-C2FtvAJs.js";import{X as f}from"./XAxis-C5bj5GgQ.js";import{L as E}from"./Legend-BJJ5wo6A.js";import{L as i}from"./Line-DpXuZWHU.js";import{T as v}from"./Tooltip-DluwIS9N.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-HDB1mOS9.js";import"./Text-BBa2fCF5.js";import"./resolveDefaultProps-OglZgdvE.js";import"./DOMUtils-CkdhxU4H.js";import"./ZIndexLayer-Dk9V8YH1.js";import"./index-lRcOI8Cy.js";import"./index-Dd8czCIR.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DnDsCJfT.js";import"./throttle-KQYU95ys.js";import"./axisSelectors-DJl001RI.js";import"./d3-scale-BRci95pZ.js";import"./CartesianAxis-C2y0lK-Z.js";import"./Layer-BGqt9quM.js";import"./types-Cq0tVQAG.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CaUdmayY.js";import"./index-Bf7Rq1hF.js";import"./index-C_QD7AAh.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DtDu-9p6.js";import"./index-DJqYT1Am.js";import"./CartesianChart-CjAW9dlX.js";import"./ZIndexPortal-DsfmsICI.js";import"./CategoricalChart-C4AmyGV7.js";import"./Symbols-CSFO1ejf.js";import"./symbol-BFxxKdiv.js";import"./path-DyVhHtw_.js";import"./dataEntryStyles-Bof1DRSv.js";import"./useElementOffset-BPNvSWcg.js";import"./uniqBy-DOejL97I.js";import"./iteratee-Bq0h_QlS.js";import"./isArguments-yB-y1yaH.js";import"./Curve-BuH0ARbV.js";import"./step-D2_GuXTT.js";import"./LabelList-CjS5fbS8.js";import"./ActivePoints-CjTQST-x.js";import"./Dot-Dha_7IA1.js";import"./activeStyles-BitiIAzx.js";import"./useAnimationId-BNUZJ-Q8.js";import"./ErrorBarContext-BjUzcwSB.js";import"./SetGraphicalItem-BKb40hJg.js";import"./getRadiusAndStrokeWidthFromDot-B1pkRXwd.js";import"./ActiveShapeUtils-IcXhTV6f.js";import"./useEffectiveDataKey-B2_fgQbM.js";import"./Cross-o-VimJqX.js";import"./Rectangle-DGCSZqUI.js";import"./util-Dxo8gN5i.js";import"./Sector-CaH0HsK_.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Mt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
