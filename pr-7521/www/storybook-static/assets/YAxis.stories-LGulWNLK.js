import{R as t}from"./iframe-CUx1TCgW.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-DnVtyTYT.js";import{R as h}from"./zIndexSlice-CyWJB_IO.js";import{L as A}from"./LineChart-CNLXTUer.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-uH6Q1yTX.js";import{X as f}from"./XAxis-XVUuusjp.js";import{L as E}from"./Legend-DP9jdGkT.js";import{L as n}from"./Line-BEUTyBzO.js";import{T as v}from"./Tooltip--yATZ1LX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BocxUsAL.js";import"./Layer-DkHmdg7h.js";import"./resolveDefaultProps-BueptT4L.js";import"./Text-C0Bz7-yS.js";import"./DOMUtils-D7djwgJL.js";import"./isWellBehavedNumber-CUV8846M.js";import"./Label-Bd7WMI0X.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B-tk4cwY.js";import"./index-DFl4S33S.js";import"./index-BJ8mfrgX.js";import"./types-5kZg7jgz.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DwQTH0-L.js";import"./throttle-BjWBzxHj.js";import"./RechartsWrapper-DPzAHq-Z.js";import"./index-CvhQIsHS.js";import"./index-BwmXDkUH.js";import"./axisSelectors-VAnXlTNN.js";import"./d3-scale-BarhEeTK.js";import"./CartesianChart-BiT6vKeC.js";import"./chartDataContext-DUiXobBm.js";import"./CategoricalChart-BV_ZCc_1.js";import"./Symbols-Ce7wtBIG.js";import"./symbol-3q2YBEtt.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DNdZu7MT.js";import"./uniqBy-DSJ0hFsD.js";import"./iteratee-CuBpgztc.js";import"./Curve-Mg827IgF.js";import"./step-Dl-o-ZW1.js";import"./AnimatedItems-ScvXBbCb.js";import"./useAnimationId-Cx6lzC6E.js";import"./ActivePoints-BFL4MLXA.js";import"./Dot-CUsFN3PS.js";import"./RegisterGraphicalItemId-BLmhcDXv.js";import"./ErrorBarContext-h5QrqZl2.js";import"./GraphicalItemClipPath-J1io5uDl.js";import"./SetGraphicalItem-CaISs0rU.js";import"./getRadiusAndStrokeWidthFromDot-CPoinBTG.js";import"./ActiveShapeUtils-D9lVsXDE.js";import"./Cross-Bzly_9F2.js";import"./Rectangle-C2v-PTgf.js";import"./util-Dxo8gN5i.js";import"./Sector-BCKOGouU.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(p=o.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const St=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,St as __namedExportsOrder,Rt as default};
