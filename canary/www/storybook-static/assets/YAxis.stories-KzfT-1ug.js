import{R as t}from"./iframe-TzfrCimv.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-B2Z4R-y-.js";import{R as h}from"./zIndexSlice-Dp5v9G1Y.js";import{L as A}from"./LineChart-CNs6QtM0.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-SmfttCxo.js";import{X as f}from"./XAxis-5FjHsuX0.js";import{L as E}from"./Legend-C7LdFeje.js";import{L as n}from"./Line-zx4GEwVd.js";import{T as v}from"./Tooltip-CdpIOour.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-ORziBLCU.js";import"./Text-Cq_y2tEB.js";import"./resolveDefaultProps-CsgnMNsn.js";import"./DOMUtils-BXdig0h8.js";import"./isWellBehavedNumber-z9eNMbuG.js";import"./useBackwardsCompatibleTheme-6HIvPrWs.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-LDMTKG6P.js";import"./index-31yWppKy.js";import"./index-I3E5SGvw.js";import"./RechartsWrapper-d5Ajpv94.js";import"./index-ououzFTQ.js";import"./index-DNVn7Vry.js";import"./throttle-BM90P8P9.js";import"./axisSelectors-Cg7dZLHA.js";import"./d3-scale-DDwg_EuX.js";import"./renderedTicksSlice-DA0LErEZ.js";import"./CartesianAxis-BGRgt604.js";import"./Layer-D26e-s_C.js";import"./types-GCQJUCAo.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CBcHGY17.js";import"./chartDataContext-C9PL5caj.js";import"./CategoricalChart-NmYFScnM.js";import"./Symbols-VpyWRrnw.js";import"./symbol-C_f38eHA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DFpTBv-U.js";import"./uniqBy-C9EHRlA6.js";import"./iteratee-CCNscPsm.js";import"./Curve-DI4o0w5Q.js";import"./step-D4kT1-OM.js";import"./AnimatedItems-q6ooW_4r.js";import"./useAnimationId-4hu6-jhP.js";import"./ActivePoints-Dbb31mNE.js";import"./Dot-Dvt3Xsey.js";import"./RegisterGraphicalItemId-ByzXvOvt.js";import"./ErrorBarContext-C3TPTEby.js";import"./GraphicalItemClipPath-DpRNkFFw.js";import"./SetGraphicalItem-B-6zq9YL.js";import"./getRadiusAndStrokeWidthFromDot-Cf3g7qVi.js";import"./ActiveShapeUtils-Dw86rWrG.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-ehNKCi8Z.js";import"./Rectangle-DYFDa40n.js";import"./util-Dxo8gN5i.js";import"./Sector-CIdOQ1ps.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const jt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,jt as __namedExportsOrder,Ot as default};
