import{R as t}from"./iframe-BaPbaLaJ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-DYYvtRQh.js";import{R as h}from"./zIndexSlice-Ct9oD4yM.js";import{L as A}from"./LineChart-BBsJQSYM.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-D591BjHP.js";import{X as f}from"./XAxis-DyE7q0u7.js";import{L as E}from"./Legend-9g7Cx5VN.js";import{L as n}from"./Line-Qtz2YiMf.js";import{T as v}from"./Tooltip-CPyECygK.js";import"./preload-helper-Dp1pzeXC.js";import"./get-D2ZTbC0U.js";import"./CartesianAxis-C9WUsr8e.js";import"./Layer-DnTHWC2s.js";import"./resolveDefaultProps-B9a4hmwF.js";import"./Text-gi3hDHLU.js";import"./DOMUtils-N0jxLcJa.js";import"./isWellBehavedNumber-Cw93K2XK.js";import"./Label-nvXx3zPl.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cmf1UnqU.js";import"./index-8NR0Yac6.js";import"./index-uHodW5ti.js";import"./types-Bxe0zMe1.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-C6EU1Gxc.js";import"./immer-DiDZ85-K.js";import"./RechartsWrapper-j68O-sFh.js";import"./index-DbNPAuc7.js";import"./index-C-SXM_61.js";import"./axisSelectors-Csn4G978.js";import"./d3-scale-njnUDxXP.js";import"./string-B6fdYHAA.js";import"./CartesianChart-FGH_s-P1.js";import"./chartDataContext-BKJVmU0E.js";import"./CategoricalChart-D9BrBGmX.js";import"./Symbols-DgaJdi9-.js";import"./symbol-CFlzKY_N.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BiSEPHYV.js";import"./uniqBy-CEb4341A.js";import"./iteratee-DHRfW3v4.js";import"./Curve-Upd9kr-b.js";import"./step-Dmz9aP0W.js";import"./AnimatedItems-BRL6-mrZ.js";import"./useAnimationId-BlKkbeMI.js";import"./ActivePoints-DjBhRx8i.js";import"./Dot-C2L5-Wjg.js";import"./RegisterGraphicalItemId-C1UHdJ8R.js";import"./ErrorBarContext-D5Gab5oy.js";import"./GraphicalItemClipPath-DrUrL8JH.js";import"./SetGraphicalItem-D7ChpxF2.js";import"./getRadiusAndStrokeWidthFromDot-CwJ3_b_N.js";import"./ActiveShapeUtils-BKxrj1Kx.js";import"./Cross-BvxMZ5D8.js";import"./Rectangle-ClzNIlMR.js";import"./Sector-BAoP8TPe.js";const Rt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
