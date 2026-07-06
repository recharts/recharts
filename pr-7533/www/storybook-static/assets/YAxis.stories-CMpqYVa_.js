import{R as t}from"./iframe-HmoKwHFX.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BdeggP_Q.js";import{R as h}from"./zIndexSlice-6UlwHzZx.js";import{L as A}from"./LineChart-D--kY4M-.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BGdl-ZHp.js";import{X as f}from"./XAxis-Ckpvg_aw.js";import{L as E}from"./Legend-Dzt5tM9m.js";import{L as n}from"./Line-DrTfOPJV.js";import{T as v}from"./Tooltip-DqJA5ZS1.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-sk3D75Jf.js";import"./Layer-DCuDnFq8.js";import"./resolveDefaultProps-BgbskIps.js";import"./Text-CF2LDoBf.js";import"./DOMUtils-DNQlLACq.js";import"./isWellBehavedNumber-ChlLFPsN.js";import"./Label-COwIarxU.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-wTJ88r9x.js";import"./index-DbZ1xFPe.js";import"./index-V8abjlH7.js";import"./types-DRVdcYGb.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CKWPLZmb.js";import"./throttle-CggiDJGE.js";import"./RechartsWrapper-j2c0QQIE.js";import"./index-BOpt7wnK.js";import"./index-B9uDrVyK.js";import"./axisSelectors-BQeYBj0I.js";import"./d3-scale-BDs_cJTc.js";import"./CartesianChart-BAb-9k9W.js";import"./chartDataContext-DrbaCNot.js";import"./CategoricalChart-5OT8W9pW.js";import"./Symbols-B-ewiTIH.js";import"./symbol-nhwXymzI.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Ro_1jCxs.js";import"./uniqBy-Bi13QdTJ.js";import"./iteratee-CbkCzpv6.js";import"./Curve-C2csUcTT.js";import"./step-BqUqaVR3.js";import"./AnimatedItems-BP2JMedo.js";import"./useAnimationId-C1cJfoVB.js";import"./ActivePoints-Dx7sR-Q2.js";import"./Dot-FYCRb0hm.js";import"./RegisterGraphicalItemId-YabdkJxn.js";import"./ErrorBarContext-CsCjPd0P.js";import"./GraphicalItemClipPath-DDhZ52Wg.js";import"./SetGraphicalItem-R8P5CdUS.js";import"./getRadiusAndStrokeWidthFromDot-BxzB0c_Y.js";import"./ActiveShapeUtils-0piQNROf.js";import"./Cross-BWQGQ4KC.js";import"./Rectangle-Dl7k0A5Q.js";import"./util-Dxo8gN5i.js";import"./Sector-BTOnlSGV.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
