import{R as t}from"./iframe-BQY4vSXy.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DT1QXVI3.js";import{R as h}from"./zIndexSlice-BdzVgEW0.js";import{L as A}from"./LineChart-DdNzH7ri.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DJsLH5DF.js";import{X as f}from"./XAxis-DJU4Mvi4.js";import{L as E}from"./Legend-CiInds5Z.js";import{L as i}from"./Line-thI8lTJ9.js";import{T as v}from"./Tooltip-CB03GqoT.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-mx5Rr5JL.js";import"./Text-CLBNZPUe.js";import"./resolveDefaultProps-G77sf460.js";import"./DOMUtils-fCmVDggT.js";import"./ZIndexLayer-CAJurUsW.js";import"./index-CQxQDYts.js";import"./index-D-_6MOIc.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-Bx2aNCzN.js";import"./throttle-CE5heSva.js";import"./axisSelectors-B45QX1Cb.js";import"./d3-scale-tF01g-yC.js";import"./CartesianAxis-DnyTGuRK.js";import"./Layer-AUPxKI27.js";import"./types-Mj5dcoaz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-xQ-Bbda9.js";import"./index-CLE53NQ2.js";import"./index-CyLNMVoO.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-BcRxM-Av.js";import"./index-Bx1R-goW.js";import"./fillDefinitions-DSK0YdxC.js";import"./CartesianChart-r0bwZB67.js";import"./ZIndexPortal-CnsPtZ0q.js";import"./CategoricalChart-DH0FyAFC.js";import"./Symbols-yVk86yax.js";import"./symbol-DVGalN_0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CipAO92M.js";import"./uniqBy-CBH5ELrR.js";import"./iteratee-8DnRGbF4.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Prn3xfVK.js";import"./step-BwGNQI61.js";import"./LabelList-CALPxAES.js";import"./ActivePoints-BFRx_fxi.js";import"./Dot-Cds0GrCQ.js";import"./activeStyles-BMraSVhQ.js";import"./useAnimationId-qEoZ-4tT.js";import"./dataEntryStyles-CGibnImn.js";import"./ErrorBarContext-DajCWgNE.js";import"./SetGraphicalItem-DSqeiOP9.js";import"./getRadiusAndStrokeWidthFromDot-DVA4wgZi.js";import"./ActiveShapeUtils-jWDRV1_r.js";import"./useEffectiveDataKey-DjptVWbj.js";import"./Cross-C_QlSN83.js";import"./Rectangle-DmyfJlq7.js";import"./util-Dxo8gN5i.js";import"./Sector-BJFnafgr.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
