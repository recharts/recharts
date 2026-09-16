import{R as t}from"./iframe-O_zfFb6r.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-4IiwGwhc.js";import{R as h}from"./zIndexSlice-CDi6Z2zv.js";import{L as A}from"./LineChart-CTnN8oz0.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DQoEYFTB.js";import{X as f}from"./XAxis-BJYhxEEM.js";import{L as E}from"./Legend-1Ol6OkJV.js";import{L as i}from"./Line-C-49beIg.js";import{T as v}from"./Tooltip-1DAkwEJk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bt0vOpuF.js";import"./Text-TAeBHRIT.js";import"./resolveDefaultProps-Cy11K6xZ.js";import"./DOMUtils-BJJ-vVKn.js";import"./isWellBehavedNumber-zMKck78V.js";import"./useId-CBZzzSpP.js";import"./useBackwardsCompatibleTheme-DbcN9pdU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CbUFYwY1.js";import"./index-CpzZNRq1.js";import"./index-F3KKsDmf.js";import"./RechartsWrapper-DPG1lJEB.js";import"./axisSelectors-Cu-Cxseq.js";import"./throttle-nfGA0JID.js";import"./d3-scale-CJf0BmNx.js";import"./index-Bs_5gbEM.js";import"./index-6nFN620n.js";import"./renderedTicksSlice-fycCYLaq.js";import"./index-Fqn27s52.js";import"./CartesianAxis-DAJd6uwN.js";import"./Layer-IOKs9hiO.js";import"./types-dgF4Zt0B.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DjXROyBm.js";import"./chartDataContext-T_bYBa0C.js";import"./CategoricalChart-Cks6RsKt.js";import"./Symbols-cbozTFmP.js";import"./symbol-C4Mpqg-9.js";import"./path-DyVhHtw_.js";import"./useElementOffset-D293KLr8.js";import"./uniqBy-B-gqZXLG.js";import"./iteratee-Tn2QA64I.js";import"./Curve-Dj1kSGWk.js";import"./step-Cv1KNwyF.js";import"./AnimatedItems-B71252eU.js";import"./useAnimationId-O6XvtviY.js";import"./ActivePoints-C0Y8Gw_Z.js";import"./Dot-CLEBjmd0.js";import"./RegisterGraphicalItemId-D2Q5ahcD.js";import"./ErrorBarContext-CDadBxpm.js";import"./GraphicalItemClipPath-C_4Tb4-L.js";import"./SetGraphicalItem-BsFfkq2Z.js";import"./getRadiusAndStrokeWidthFromDot-BlCMDsUw.js";import"./ActiveShapeUtils-0QkmK8Hn.js";import"./useGraphicalItemIdentity-Q9Kv4PEr.js";import"./Cross-QLCt5l02.js";import"./Rectangle-DP-IEOGk.js";import"./util-Dxo8gN5i.js";import"./Sector-Bp2DPLi0.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
