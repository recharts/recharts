import{R as t}from"./iframe-Bzk7zQca.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-SS3sg1KC.js";import{R as h}from"./zIndexSlice-CmFEWq1r.js";import{L as A}from"./LineChart-BR6lYcBJ.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BHeOec6y.js";import{X as f}from"./XAxis-BwFTdCod.js";import{L as E}from"./Legend-BPmG3xhd.js";import{L as n}from"./Line-D_KoWL_N.js";import{T as v}from"./Tooltip-eenNtxQb.js";import"./preload-helper-Dp1pzeXC.js";import"./get-CihDQax7.js";import"./CartesianAxis-BuH3LaY7.js";import"./Layer-C58in0aX.js";import"./resolveDefaultProps-CJmyog69.js";import"./Text-D9hBaYLe.js";import"./DOMUtils-DFVOZKBs.js";import"./isWellBehavedNumber-CzHA7xI4.js";import"./Label-CTPsCXr1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DxzvrsVM.js";import"./index-CeYl3XRo.js";import"./index-D8DPmuyK.js";import"./types-BYFlfVWD.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CLAMxmGy.js";import"./immer-CcXYFoUI.js";import"./RechartsWrapper-DcMBMMpz.js";import"./index-CKgE1yXu.js";import"./index-OXAI-BjX.js";import"./axisSelectors-BZF8A_qV.js";import"./d3-scale-MuAf3A9e.js";import"./string-B6fdYHAA.js";import"./CartesianChart-C4aLau3c.js";import"./chartDataContext-CKqg-aWy.js";import"./CategoricalChart-BpAfwFxI.js";import"./Symbols-iwAfdcfd.js";import"./symbol-BjkRgUq5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-C3YrErby.js";import"./uniqBy-20cDpXHs.js";import"./iteratee-BHx8gBfP.js";import"./Curve-QDW-Shr1.js";import"./step-BsT6z54w.js";import"./AnimatedItems-Bm1dVVre.js";import"./useAnimationId-3u1Yr1gs.js";import"./ActivePoints-BuHZiJPV.js";import"./Dot-CLahKtoI.js";import"./RegisterGraphicalItemId-C-C-Ugyg.js";import"./ErrorBarContext-C883JGGF.js";import"./GraphicalItemClipPath-Bjzuz5Yo.js";import"./SetGraphicalItem-BZrvK3UD.js";import"./getRadiusAndStrokeWidthFromDot-CmnydJOh.js";import"./ActiveShapeUtils-Dm9siI7l.js";import"./Cross-D4MdnFGN.js";import"./Rectangle-CDk6Iz6Z.js";import"./Sector-DHvxyLBb.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
