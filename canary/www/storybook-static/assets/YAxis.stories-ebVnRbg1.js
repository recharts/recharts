import{R as t}from"./iframe-D54unYLy.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-akurfq85.js";import{R as h}from"./zIndexSlice-Cm3b7ejj.js";import{L as A}from"./LineChart-KbeJFkeU.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-iXe5GTLd.js";import{X as f}from"./XAxis-R4jdjMJ5.js";import{L as E}from"./Legend-Dk4rOUIE.js";import{L as i}from"./Line-ByVQ_w7d.js";import{T as v}from"./Tooltip-5_e256fX.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-A3PRHVZO.js";import"./Text-CRGGbb6_.js";import"./resolveDefaultProps-CJCAn8xn.js";import"./pageBackground-CsysAoq2.js";import"./isWellBehavedNumber-BRWfHs55.js";import"./useId-B4uqruq9.js";import"./useBackwardsCompatibleTheme-BSJdofEh.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DfUYfUZg.js";import"./index-DTKKzB_q.js";import"./index-DJM2R3WX.js";import"./axisSelectors-CGx4lpK1.js";import"./throttle-DMkP6nmZ.js";import"./d3-scale-izKDfaZA.js";import"./CartesianAxis-UtS4SURK.js";import"./Layer-crHiZgAm.js";import"./types-BmPqNA2a.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-D7aoxSus.js";import"./index-C9p80rQK.js";import"./index-DILyQNHS.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-Sp30bFVi.js";import"./index-BNdKzrH5.js";import"./CartesianChart-CcD5rs5o.js";import"./chartDataContext-Coa6LtBf.js";import"./CategoricalChart-Bg1dkEg1.js";import"./Symbols-BPVu9Joj.js";import"./symbol-A2VrwPOA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-COT3eBVz.js";import"./uniqBy-DUhvtwBb.js";import"./iteratee-D8iCn3Rd.js";import"./isArguments-yB-y1yaH.js";import"./Curve-leEdGdAp.js";import"./step-C309cuJU.js";import"./activeStyles-qzo8AQBX.js";import"./useAnimationId-C7SuCt1Q.js";import"./dataEntryStyles-CsFYoURq.js";import"./ActivePoints-Bqn9pf-5.js";import"./Dot-B2rX6rOm.js";import"./ErrorBarContext-m85c5O32.js";import"./GraphicalItemClipPath-DDtxOsTL.js";import"./SetGraphicalItem-Y9oO0QZg.js";import"./getRadiusAndStrokeWidthFromDot-DqXexg1f.js";import"./ActiveShapeUtils-DPaRxWi8.js";import"./useEffectiveDataKey-BB9JnQ0o.js";import"./Cross-CyqJOPur.js";import"./Rectangle-BjxF51Ga.js";import"./util-Dxo8gN5i.js";import"./Sector-MvPs0y-3.js";const Xt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},zt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,zt as __namedExportsOrder,Xt as default};
