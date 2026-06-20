import{R as t}from"./iframe-DkQJn7oC.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-B058BHQI.js";import{R as h}from"./zIndexSlice-CLvhVPNj.js";import{L as A}from"./LineChart-IWGJWAv2.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BjORpNZe.js";import{X as f}from"./XAxis-OlRaja_E.js";import{L as E}from"./Legend-BYrqTAz3.js";import{L as n}from"./Line-3Fr2lg_K.js";import{T as v}from"./Tooltip-BA3rhm5B.js";import"./preload-helper-Dp1pzeXC.js";import"./get-_o-XDxyc.js";import"./CartesianAxis-BfpvL1x5.js";import"./Layer-Br1RHuVf.js";import"./resolveDefaultProps-CtV3qxun.js";import"./Text-Bdxz4_Jg.js";import"./DOMUtils-Dl1hyTMQ.js";import"./isWellBehavedNumber-D3HHn2e5.js";import"./Label-ufurgCkW.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BvwLITgH.js";import"./index-DD1gmeQO.js";import"./index-DNtFXHJ-.js";import"./types-BZmxyoje.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DdtdEwsq.js";import"./immer-ozzvrCwh.js";import"./RechartsWrapper-D5ByFvr9.js";import"./index-CDE_9WY4.js";import"./index-BU3HhPoo.js";import"./axisSelectors-kKO86fyF.js";import"./d3-scale-B9HIJ_CW.js";import"./CartesianChart-BQyR2r2D.js";import"./chartDataContext-Ca9RDW-S.js";import"./CategoricalChart-Fc9nOzpN.js";import"./Symbols-Bzvyyefy.js";import"./symbol-BtyE-nfF.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DjsvA0sO.js";import"./uniqBy-BXfaEW_y.js";import"./iteratee-C_u0N0mB.js";import"./Curve-HzFtr0jb.js";import"./step-G_UXBYu7.js";import"./AnimatedItems-w7rZvjc1.js";import"./useAnimationId-CwryZT39.js";import"./ActivePoints-j2kJmVua.js";import"./Dot-Dno_atKi.js";import"./RegisterGraphicalItemId-BCNHxJaH.js";import"./ErrorBarContext-DzKhrRZV.js";import"./GraphicalItemClipPath-Dkvi73X5.js";import"./SetGraphicalItem-Cl7ozA9v.js";import"./getRadiusAndStrokeWidthFromDot-DRw_J2VH.js";import"./ActiveShapeUtils-CNNYz_9g.js";import"./Cross-B81Fs-AA.js";import"./Rectangle-BEXU9a8A.js";import"./util-Dxo8gN5i.js";import"./Sector-Cf94wIX9.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
