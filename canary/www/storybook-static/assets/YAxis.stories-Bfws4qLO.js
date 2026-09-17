import{R as t}from"./iframe-CCA1dLWD.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DVlxFbm5.js";import{R as h}from"./zIndexSlice-Bqs-eJ8p.js";import{L as A}from"./LineChart-BGONc8N4.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DNUfTvW9.js";import{X as f}from"./XAxis-B02ZLuLQ.js";import{L as E}from"./Legend-D9pOt-by.js";import{L as i}from"./Line-DzXrLh5M.js";import{T as v}from"./Tooltip-oEVpkldu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-C7jyVHZg.js";import"./Text-Cxmc4hoL.js";import"./resolveDefaultProps-DAFAxP68.js";import"./DOMUtils-B9q-UHbd.js";import"./isWellBehavedNumber-CUTtCnYO.js";import"./useId-C-4rQrJ2.js";import"./useBackwardsCompatibleTheme-B-BtV5HU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BsYZhZ4O.js";import"./index-C97djya6.js";import"./index-BTapAtmF.js";import"./RechartsWrapper-Ci54jWLi.js";import"./axisSelectors-ueWwuThv.js";import"./throttle-D3xpLLdH.js";import"./d3-scale-BdepyZ_B.js";import"./index-Cyg8bGg4.js";import"./index-CVq5gi49.js";import"./renderedTicksSlice-CuWBxFlw.js";import"./index-Cah2JXyu.js";import"./CartesianAxis-ClD0AQ8W.js";import"./Layer-CmH8ISrU.js";import"./types-B2426EfA.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CTE6kj-2.js";import"./chartDataContext-CLCJusst.js";import"./CategoricalChart-mUCs8Qny.js";import"./Symbols-BcmRvXLE.js";import"./symbol-1PbKhfdG.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DZYD1Ia0.js";import"./uniqBy-BMBICafF.js";import"./iteratee-D0uU7ZFx.js";import"./Curve-6_pS1I8Z.js";import"./step-pmX9eUCr.js";import"./AnimatedItems-Bwhxgw5t.js";import"./useAnimationId-BZsPKArS.js";import"./ActivePoints-D5cnScbI.js";import"./Dot-PvcySOeb.js";import"./RegisterGraphicalItemId-BRUpoP9Q.js";import"./ErrorBarContext-C-MqMGv0.js";import"./GraphicalItemClipPath-DcQmHX6S.js";import"./SetGraphicalItem-6HsvsmQk.js";import"./getRadiusAndStrokeWidthFromDot-CgH2ac05.js";import"./ActiveShapeUtils-zvjqERUF.js";import"./useGraphicalItemIdentity-CJ147Nvu.js";import"./Cross-H8GMn6_a.js";import"./Rectangle-DTCXmGfs.js";import"./util-Dxo8gN5i.js";import"./Sector-B5PbBjSM.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
