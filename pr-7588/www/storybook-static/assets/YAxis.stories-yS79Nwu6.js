import{R as t}from"./iframe-dVfgBJJs.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-Bw51heiQ.js";import{R as h}from"./zIndexSlice-Cjn5-XTM.js";import{L as A}from"./LineChart-Bjmb6A16.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-S7mJlfqt.js";import{X as f}from"./XAxis-Dq_1Ikw5.js";import{L as E}from"./Legend-aBMS0PKs.js";import{L as n}from"./Line-CqjanWML.js";import{T as v}from"./Tooltip-CJSXK5by.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-aoe5sT-Z.js";import"./Layer-CMYHU7wr.js";import"./resolveDefaultProps-BJYE31LD.js";import"./Text-pzoHfxc1.js";import"./DOMUtils-BHngjwEG.js";import"./isWellBehavedNumber-Dps59fvg.js";import"./Label-Qwq3mE6t.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CwGLm3MP.js";import"./index-C6eTt67z.js";import"./index-MNnIylKM.js";import"./types-zZpSojV-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D2-S4Lnl.js";import"./throttle-B7XzNIu7.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BUOG_0PT.js";import"./index-CFOPrJ2a.js";import"./index-CZjDID2X.js";import"./axisSelectors-rruDH4Fs.js";import"./d3-scale-BnZ4Lirr.js";import"./CartesianChart-lwgDkPey.js";import"./chartDataContext-CKWmrP30.js";import"./CategoricalChart-C8uoPany.js";import"./Symbols-HSjwRIgd.js";import"./symbol-Jvzv5OcK.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B6pjqzOx.js";import"./uniqBy-B0dYKt0p.js";import"./iteratee-C7S4GxDg.js";import"./Curve-BS8zfYeH.js";import"./step-DuOmXCgZ.js";import"./AnimatedItems-_UVM3ygI.js";import"./useAnimationId-DepU2l4z.js";import"./ActivePoints-CtZ_3WUF.js";import"./Dot-C7HuS7dU.js";import"./RegisterGraphicalItemId-B-wtHeoX.js";import"./ErrorBarContext-CcM5piDn.js";import"./GraphicalItemClipPath-CjVY23ZB.js";import"./SetGraphicalItem-BrDpUng6.js";import"./getRadiusAndStrokeWidthFromDot--eZofM29.js";import"./ActiveShapeUtils-BR_u5MdP.js";import"./Cross-BdrRvahT.js";import"./Rectangle-CBvNSrWO.js";import"./util-Dxo8gN5i.js";import"./Sector-CC1aczQ9.js";const St={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Wt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Wt as __namedExportsOrder,St as default};
