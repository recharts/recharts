import{R as t}from"./iframe-Ce2LNmzq.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CHPMR7tu.js";import{R as h}from"./zIndexSlice-1iBSzntV.js";import{L as A}from"./LineChart-2ORSjTDe.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BogmWVqB.js";import{X as f}from"./XAxis-ChLxoQeP.js";import{L as E}from"./Legend-P00sCpER.js";import{L as n}from"./Line-Cmb7zLRd.js";import{T as v}from"./Tooltip-vdLhDqaO.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-E5RSdERr.js";import"./Text-1GNKdZPR.js";import"./resolveDefaultProps-Bt6qRPyP.js";import"./DOMUtils-DXjDSVEa.js";import"./isWellBehavedNumber-LiGS8Ktg.js";import"./useBackwardsCompatibleTheme-C9k5uHL0.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-hciQBMwm.js";import"./index-CwWtniec.js";import"./index-A8_rJiXz.js";import"./RechartsWrapper-NruqEuMP.js";import"./index-CWtZ9yph.js";import"./index-C0AYEPvF.js";import"./throttle-BPcDKDas.js";import"./axisSelectors-nf5d_TCI.js";import"./d3-scale-uRAm4Q4g.js";import"./renderedTicksSlice-DRhSVK4R.js";import"./CartesianAxis-D_IJzMyn.js";import"./Layer-CmHiQhsD.js";import"./types-D9eaN5qP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-C3QGU_Gm.js";import"./chartDataContext-mV7HyGJe.js";import"./CategoricalChart-CdBHij7l.js";import"./Symbols-Dl8ZAYeK.js";import"./symbol-DLuozwbz.js";import"./path-DyVhHtw_.js";import"./useElementOffset-e8S935ma.js";import"./uniqBy-DM1WHRb1.js";import"./iteratee-DVWRkxa3.js";import"./Curve-pGKyKnaa.js";import"./step-B81xmQ7d.js";import"./AnimatedItems-EYOrwSGz.js";import"./useAnimationId-DJBKMCXo.js";import"./ActivePoints-BV19snok.js";import"./Dot-BtvWNtdQ.js";import"./RegisterGraphicalItemId-BhPsp4dD.js";import"./ErrorBarContext-z5kDqZ_L.js";import"./GraphicalItemClipPath-DPYSwVHo.js";import"./SetGraphicalItem-CX7uV2i5.js";import"./getRadiusAndStrokeWidthFromDot-D3ct2NHr.js";import"./ActiveShapeUtils-DVN9EFMa.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-DfT9jLgy.js";import"./Rectangle-CPJem9HH.js";import"./util-Dxo8gN5i.js";import"./Sector-CzFVmYU0.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
