import{R as t}from"./iframe-DY5yIkq2.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DKNkaL0G.js";import{R as h}from"./zIndexSlice-BJ9sbnI3.js";import{L as A}from"./LineChart-cpvpCrGU.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-C1j9sRnO.js";import{X as f}from"./XAxis-DqmgH3_K.js";import{L as E}from"./Legend-BU2Y_G38.js";import{L as n}from"./Line-D8pVJeO2.js";import{T as v}from"./Tooltip-93QJ3NKk.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DF-ljJas.js";import"./Text-CbUk5Nnj.js";import"./resolveDefaultProps-CD9o0rsG.js";import"./DOMUtils-PzmIv2NH.js";import"./isWellBehavedNumber-DqVPPSXs.js";import"./useId-s6AFE7pi.js";import"./useBackwardsCompatibleTheme-CQzhlAGv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BUoXCop5.js";import"./index-6CL2Bs_1.js";import"./index-Cl8EGK2P.js";import"./RechartsWrapper-fiPqbXet.js";import"./index-CqtRrj2-.js";import"./index-BgsJFNTR.js";import"./throttle-ClrYp41z.js";import"./axisSelectors-BA6Z_Ork.js";import"./d3-scale-L5elDZ4E.js";import"./renderedTicksSlice-CkTe5jVw.js";import"./CartesianAxis-Dkt1u38S.js";import"./Layer-sQPOBB7C.js";import"./types-CYQx7sGq.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BYEGQZkF.js";import"./chartDataContext-CpL7gfA0.js";import"./CategoricalChart-xf3XNLGA.js";import"./Symbols-BDBGTJa7.js";import"./symbol-BV3D7xmY.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C44gFBr0.js";import"./uniqBy-CrTJkdgV.js";import"./iteratee-5kgpLf6w.js";import"./Curve-CFlple2Z.js";import"./step-3W0WqQC-.js";import"./AnimatedItems-0mJPdXUD.js";import"./useAnimationId-bV9tA_xy.js";import"./ActivePoints-DO3E4C9p.js";import"./Dot-CFTB-H51.js";import"./RegisterGraphicalItemId-uvsWx-K_.js";import"./ErrorBarContext-DeFkaPs_.js";import"./GraphicalItemClipPath-pdIKb4VD.js";import"./SetGraphicalItem-CQx7YnIu.js";import"./getRadiusAndStrokeWidthFromDot-9lBJp0HG.js";import"./ActiveShapeUtils-D2cfX5ZD.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-W-kdfplD.js";import"./Rectangle-D-WBL6H0.js";import"./util-Dxo8gN5i.js";import"./Sector-D5xY4Hq9.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
