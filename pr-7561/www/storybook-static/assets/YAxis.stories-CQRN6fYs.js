import{R as t}from"./iframe-BdYAncLR.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BEJGzNud.js";import{R as h}from"./zIndexSlice-5bpfVQyA.js";import{L as A}from"./LineChart-CCf2jec9.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-C-qxR3D1.js";import{X as f}from"./XAxis-CbeL6UmM.js";import{L as E}from"./Legend-Bm_YS8vr.js";import{L as n}from"./Line-Bpks10ih.js";import{T as v}from"./Tooltip-Crtx4tku.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BX7MbhnQ.js";import"./Layer-DIV0oEbW.js";import"./resolveDefaultProps-5h8_lZEQ.js";import"./Text-C319EuNs.js";import"./DOMUtils-DBahITf2.js";import"./isWellBehavedNumber-_Cj0WZhc.js";import"./Label-JmhQBV8Y.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-TIVdTQGS.js";import"./index-CGm2P49p.js";import"./index-B2x5-TIo.js";import"./types-OsxZUaOH.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-L4Igrea0.js";import"./throttle-BjujQpzW.js";import"./RechartsThemeContext-D707JDBS.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-B45z8Y-R.js";import"./index-Du0b8e_w.js";import"./index-B0-wIR84.js";import"./axisSelectors-zM0j77wa.js";import"./d3-scale-23ottKw2.js";import"./CartesianChart-BhQs_YPC.js";import"./chartDataContext-CgP-nFTi.js";import"./CategoricalChart-Bp8IO2Nw.js";import"./Symbols-2xOvz_0s.js";import"./symbol-VDBX55_l.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Bq6EO0f-.js";import"./uniqBy-Fvrf5pq2.js";import"./iteratee-BZcOrPZP.js";import"./Curve-Bi7tJxo-.js";import"./step-DGS-jgb3.js";import"./AnimatedItems-Dy_aktOc.js";import"./useAnimationId-CVihXN2U.js";import"./ActivePoints-DqzUtciu.js";import"./Dot-axcqS0GT.js";import"./RegisterGraphicalItemId-CwjribNO.js";import"./ErrorBarContext-IO5KIe3b.js";import"./GraphicalItemClipPath-1-xikmiv.js";import"./SetGraphicalItem-QdG8FGgR.js";import"./getRadiusAndStrokeWidthFromDot-B-U7YWSC.js";import"./ActiveShapeUtils-DqTrL5g1.js";import"./Cross-DhPG0BJQ.js";import"./Rectangle-D5kCmVGB.js";import"./util-Dxo8gN5i.js";import"./Sector-DlpC4iuy.js";const Wt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Ot=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Ot as __namedExportsOrder,Wt as default};
