import{R as t}from"./iframe-BLb3YVtb.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-fcMK6IsP.js";import{R as h}from"./zIndexSlice-DJkgkDD9.js";import{L as A}from"./LineChart-CmHIaU7F.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BpK60PEo.js";import{X as f}from"./XAxis-DkAVE8hF.js";import{L as E}from"./Legend-D8YCbZ3i.js";import{L as n}from"./Line-CqqpJna2.js";import{T as v}from"./Tooltip-CDZM8gtJ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DJ3830uQ.js";import"./CartesianAxis-BbjeI4ni.js";import"./Layer-BK8zFmi3.js";import"./resolveDefaultProps-CnVWahPK.js";import"./Text-IRDE_cDN.js";import"./DOMUtils-_5JDSOjo.js";import"./isWellBehavedNumber-DlUvkjSQ.js";import"./Label-DW72PY7h.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-5e79PAf2.js";import"./index-DEpMuUHp.js";import"./index-wtrxX94s.js";import"./types-45FMQ0ZC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-k5ys3P6y.js";import"./throttle-6auUp_qF.js";import"./RechartsWrapper-CUaMC7NX.js";import"./index-DpQytYeA.js";import"./index-Cj1DGWT6.js";import"./axisSelectors-DadMFlsr.js";import"./d3-scale-Bikema70.js";import"./CartesianChart-B4u-2HHw.js";import"./chartDataContext-BoMs8zEW.js";import"./CategoricalChart-Csrvckvr.js";import"./Symbols-BEYQqBvw.js";import"./symbol-C2k3ukzi.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CQsk5lW6.js";import"./uniqBy-CVPPpRZP.js";import"./iteratee-BihC2xCb.js";import"./Curve-gD93iCPz.js";import"./step-DW4vIB3R.js";import"./AnimatedItems-VUSNP4y9.js";import"./useAnimationId-nzk_I_IH.js";import"./ActivePoints-Bm_TZ0P6.js";import"./Dot-D_39xHUo.js";import"./RegisterGraphicalItemId-Byl2Zyfr.js";import"./ErrorBarContext-CdfKpXhM.js";import"./GraphicalItemClipPath-gmGdN2WI.js";import"./SetGraphicalItem-BWF_fkaR.js";import"./getRadiusAndStrokeWidthFromDot-erroBPpZ.js";import"./ActiveShapeUtils-2WDiJcdZ.js";import"./Cross-D1JRPJfe.js";import"./Rectangle-Deq9IpXZ.js";import"./util-Dxo8gN5i.js";import"./Sector-Cm35b88d.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
