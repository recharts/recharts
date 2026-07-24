import{R as t}from"./iframe-Dz-8xobX.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BHn5bCj9.js";import{R as h}from"./zIndexSlice-DLGpG8sy.js";import{L as A}from"./LineChart-BnOu3hZ1.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-CtOV40V3.js";import{X as f}from"./XAxis-DMj3Kvex.js";import{L as E}from"./Legend-D-2DjTxY.js";import{L as n}from"./Line-B2VZCiKC.js";import{T as v}from"./Tooltip-JL5ofiGR.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BSXwVKyu.js";import"./Layer-DM8xvsTO.js";import"./resolveDefaultProps-jtUUwvO_.js";import"./Text-CvUE7W_7.js";import"./DOMUtils-9gmha4le.js";import"./isWellBehavedNumber-C60qZ5Lu.js";import"./Label-CUth2UOL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BepkwV1X.js";import"./index-DwxVslcQ.js";import"./index-50xdzldc.js";import"./types-B2b4Ay33.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CUvwyxyl.js";import"./throttle-BhiZXvYf.js";import"./isBuffer-Crkas5dz.js";import"./RechartsWrapper-BxZxX3d-.js";import"./index-D51_thAx.js";import"./index-nwbz6jJ6.js";import"./axisSelectors-RA5EatZ8.js";import"./d3-scale-Eu5vW6Yz.js";import"./CartesianChart-CXDvShYZ.js";import"./chartDataContext-DFkhy0VZ.js";import"./CategoricalChart-Dl3rCbrV.js";import"./Symbols-BD06pTHM.js";import"./symbol-mTWSg8U_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BzS3hzef.js";import"./uniqBy-C0Bh4kGh.js";import"./iteratee-DFjnW7Yu.js";import"./Curve-C_Qt5Biu.js";import"./step-B3JVaVSK.js";import"./AnimatedItems-C8QaJVru.js";import"./useAnimationId-DHQotoBY.js";import"./ActivePoints-nN-9PNcc.js";import"./Dot-HydkS6Pw.js";import"./RegisterGraphicalItemId-CqDct8KX.js";import"./ErrorBarContext-CHoqNUZJ.js";import"./GraphicalItemClipPath-DMz5gKke.js";import"./SetGraphicalItem-1qJXA-7o.js";import"./getRadiusAndStrokeWidthFromDot-j5D6edh7.js";import"./ActiveShapeUtils-C_pP3GP_.js";import"./Cross-CWvhF5sg.js";import"./Rectangle-BjULrVDC.js";import"./util-Dxo8gN5i.js";import"./Sector-BB_eiEE_.js";const St={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
