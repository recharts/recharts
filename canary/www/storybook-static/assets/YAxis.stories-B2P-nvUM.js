import{R as t}from"./iframe-oSm8ncin.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BivtkPP6.js";import{R as h}from"./zIndexSlice-DvT_amFo.js";import{L as A}from"./LineChart-CRAJ5Pja.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-cmL_ACSA.js";import{X as f}from"./XAxis-rWMx021r.js";import{L as E}from"./Legend-zntpUH-c.js";import{L as i}from"./Line-DROjObTD.js";import{T as v}from"./Tooltip-078BydMz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DPyx96_s.js";import"./Text-BWvwrxPl.js";import"./resolveDefaultProps-CiTJI47d.js";import"./DOMUtils-BGxUAFyQ.js";import"./isWellBehavedNumber-CCMQKmI-.js";import"./useId-BLP9z_DT.js";import"./useBackwardsCompatibleTheme-B6W0Pzfd.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Csw-EOMR.js";import"./index-BcLgASAz.js";import"./index-DhJ936Cx.js";import"./RechartsWrapper-DD_spGc2.js";import"./axisSelectors-CKiFWBK6.js";import"./throttle-Cx1ccipN.js";import"./d3-scale-VuQaHR8V.js";import"./index-BEgTYoe2.js";import"./index-Bu5ia8Fq.js";import"./renderedTicksSlice-DvZXVX5V.js";import"./index-b9HoDQHW.js";import"./CartesianAxis-DnYW7AG9.js";import"./Layer-DyWXZatW.js";import"./types-DFgJchiK.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-kW9NXKsO.js";import"./chartDataContext-Bj9GKAto.js";import"./CategoricalChart-_S_x7otk.js";import"./Symbols-DoWcadNt.js";import"./symbol-DwizSsDc.js";import"./path-DyVhHtw_.js";import"./useElementOffset-4nozGT_V.js";import"./uniqBy-BItzAnk5.js";import"./iteratee-CvG7v8HH.js";import"./Curve-0eRV3Tfk.js";import"./step-NYzyT-_J.js";import"./AnimatedItems-BqDLnMl8.js";import"./useAnimationId-Bxm77g86.js";import"./ActivePoints-BDnVkWFc.js";import"./Dot-R8_RPRPn.js";import"./RegisterGraphicalItemId-BjlJzRIf.js";import"./ErrorBarContext--MZg4-Ns.js";import"./GraphicalItemClipPath-B4m_JP2k.js";import"./SetGraphicalItem-3c27uR51.js";import"./getRadiusAndStrokeWidthFromDot-CJie2LqZ.js";import"./ActiveShapeUtils-C_Yr1SfA.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-D-dBfYi-.js";import"./Rectangle-kf9gK_tK.js";import"./util-Dxo8gN5i.js";import"./Sector-BJs3gvjr.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
