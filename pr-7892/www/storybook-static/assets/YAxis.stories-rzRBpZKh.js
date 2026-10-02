import{R as t}from"./iframe-C0YxDW4G.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DweGkw3n.js";import{R as h}from"./zIndexSlice-DZlnymAS.js";import{L as A}from"./LineChart-CVcP0Aw_.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Bb7zoqVW.js";import{X as f}from"./XAxis-Cpmqfpq_.js";import{L as E}from"./Legend-C9ri1cZo.js";import{L as i}from"./Line-Cpl-VXWr.js";import{T as v}from"./Tooltip-zR4Uhk69.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-gEQqlFEh.js";import"./Text-BVHk9liS.js";import"./resolveDefaultProps-DJlTwR1C.js";import"./DOMUtils-CbyUgj5a.js";import"./isWellBehavedNumber-BBCyva1N.js";import"./useId-DohVK8l3.js";import"./useBackwardsCompatibleTheme-CKP3ZQ-p.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-D7SEoPy2.js";import"./index-BVdk1KvG.js";import"./index-CKK11yAc.js";import"./RechartsWrapper-BlkZ7fGa.js";import"./axisSelectors-nVTOJQip.js";import"./throttle-DOQHZSoJ.js";import"./d3-scale-DUyT1Gjc.js";import"./index-BIhmmbcr.js";import"./index-B97k9itH.js";import"./renderedTicksSlice-BVS-v-zq.js";import"./index-Cpic7GAq.js";import"./CartesianAxis-d866ov5z.js";import"./Layer-tJBN4qpr.js";import"./types-CmslNM9O.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CyMga4mL.js";import"./chartDataContext-DVZlfd-d.js";import"./CategoricalChart-BIr7jbpw.js";import"./Symbols-CbOdKhju.js";import"./symbol-CwLocrbc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-k9b-gsJZ.js";import"./uniqBy-eGdnF5ge.js";import"./iteratee-Cy8fxwlM.js";import"./Curve-ID0kLGRf.js";import"./step-BuTfKpR_.js";import"./AnimatedItems-DNNl8m9z.js";import"./useAnimationId-BpnQNYpV.js";import"./ActivePoints-mPjd9m9U.js";import"./Dot-DVL9KKRs.js";import"./RegisterGraphicalItemId-DyGH3H1s.js";import"./ErrorBarContext-_SzMhsus.js";import"./GraphicalItemClipPath-BMlAd1SQ.js";import"./SetGraphicalItem-BTB5LVHV.js";import"./getRadiusAndStrokeWidthFromDot-DYSx7Sm5.js";import"./ActiveShapeUtils-ZNrpT7nq.js";import"./useGraphicalItemIdentity-BFvVeiu2.js";import"./Cross-DLa943FX.js";import"./Rectangle-Cdyy37-n.js";import"./util-Dxo8gN5i.js";import"./Sector-iXZx7oIx.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
