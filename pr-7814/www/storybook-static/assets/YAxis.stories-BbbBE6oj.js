import{R as t}from"./iframe-u9oyaNDa.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DcziBOs8.js";import{R as h}from"./zIndexSlice-CP6DEYJK.js";import{L as A}from"./LineChart-B97ZiehQ.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-3za1VbL9.js";import{X as f}from"./XAxis-mDQaQsGs.js";import{L as E}from"./Legend-CcRC945r.js";import{L as i}from"./Line-7GaAxAzO.js";import{T as v}from"./Tooltip-DiUmtIlX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-Q8r239gm.js";import"./Text-BjcDy3qe.js";import"./resolveDefaultProps-DAwvazXN.js";import"./DOMUtils-ClqiwCzY.js";import"./isWellBehavedNumber-BM97SC6u.js";import"./useId-C7h_mhKQ.js";import"./useBackwardsCompatibleTheme-B4wBZYcr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CWsudvRq.js";import"./index-Cf659ixt.js";import"./index-KfJc4WDj.js";import"./RechartsWrapper-BUYC64MV.js";import"./axisSelectors-OhjP93PE.js";import"./throttle-BNJMxzFn.js";import"./d3-scale-CXFCyIt2.js";import"./index-BqftORPs.js";import"./index-CBGd9m5k.js";import"./renderedTicksSlice-Kslt8j3i.js";import"./index-DWf2p5U7.js";import"./CartesianAxis-BInpl5Mc.js";import"./Layer-DjumWApv.js";import"./types-DQ_9ILU-.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-GMYsDnOd.js";import"./chartDataContext-CUbnBmUW.js";import"./CategoricalChart-DAgdBpFV.js";import"./Symbols-CGPR52E1.js";import"./symbol-LPq4H3NR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C-12Rct7.js";import"./uniqBy-ThGgtOY0.js";import"./iteratee-TQ17fPkk.js";import"./Curve-DGZmW8IJ.js";import"./step-BrZPGksV.js";import"./AnimatedItems-BOaP-WB5.js";import"./useAnimationId-DzZz4Iie.js";import"./ActivePoints-CvbD508d.js";import"./Dot-CL6-lJmb.js";import"./RegisterGraphicalItemId-DN5KjZcx.js";import"./ErrorBarContext-3dixV13Q.js";import"./GraphicalItemClipPath-DV3LH61r.js";import"./SetGraphicalItem-Cs7cmOu4.js";import"./getRadiusAndStrokeWidthFromDot-CN_YkoZo.js";import"./ActiveShapeUtils-DNXHDk_r.js";import"./useGraphicalItemIdentity-BpDjC4sF.js";import"./Cross-DBjhH0rb.js";import"./Rectangle-un1MW7QV.js";import"./util-Dxo8gN5i.js";import"./Sector-qC3sba4E.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
