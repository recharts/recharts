import{R as t}from"./iframe-CRyknHcV.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DKnjJQyk.js";import{R as h}from"./zIndexSlice-D94J06pN.js";import{L as A}from"./LineChart-C0rZvnrn.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-UsVPemXH.js";import{X as f}from"./XAxis-CQvMjduc.js";import{L as E}from"./Legend-C3KuxZ0g.js";import{L as n}from"./Line-BKwpqhNN.js";import{T as v}from"./Tooltip-DJwNP3Cy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Bb81vEf3.js";import"./Text-AosieIGC.js";import"./resolveDefaultProps-Bykyhg_C.js";import"./DOMUtils-DDmVxA4T.js";import"./isWellBehavedNumber-BT2IcqCv.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CO71XxiU.js";import"./index-BbPWbk6H.js";import"./index-CEdVW4kJ.js";import"./RechartsWrapper-BtW47C_U.js";import"./index-BH8DbImd.js";import"./index-_DeEburD.js";import"./throttle-CdnYcrez.js";import"./axisSelectors-HI2cMDW5.js";import"./d3-scale-BQSgkEBA.js";import"./renderedTicksSlice-D7DzHBC4.js";import"./CartesianAxis-Czm-DLiC.js";import"./Layer-tFywX8jB.js";import"./types-CgTXGcnU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CjmNK8Bl.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-CYC8tTC2.js";import"./chartDataContext-CeCxKcZU.js";import"./CategoricalChart-C5pYrdFP.js";import"./Symbols-CzYfCG8Y.js";import"./symbol-BGzG6k2R.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B-3hZY7P.js";import"./uniqBy-D-IDiSzi.js";import"./iteratee-CVU5dPYq.js";import"./Curve-Cx7OO1Tc.js";import"./step-CoZJp4zn.js";import"./AnimatedItems-DuJcIC8o.js";import"./useAnimationId-B3genVAW.js";import"./ActivePoints-DQSPDrQl.js";import"./Dot-Cg5Ch71G.js";import"./RegisterGraphicalItemId-CQD31yq-.js";import"./ErrorBarContext-isXdoWCJ.js";import"./GraphicalItemClipPath-BjhjGLpR.js";import"./SetGraphicalItem-sEhy2M4N.js";import"./getRadiusAndStrokeWidthFromDot-CPUyhS2F.js";import"./ActiveShapeUtils-0pw7uw2c.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-dQK9qAfq.js";import"./Rectangle-C7u2937O.js";import"./util-Dxo8gN5i.js";import"./Sector-2l4dxI6m.js";const Ot={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
