import{e as t}from"./iframe-LVl3b4xQ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-D2De-1fU.js";import{R as h}from"./arrayEqualityCheck-TRBYdTbW.js";import{L as A}from"./LineChart-Dc1wSUza.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-BMi0iJ7M.js";import{X as x}from"./XAxis-S2uC6fKQ.js";import{L as E}from"./Legend-C1q9peph.js";import{L as n}from"./Line-OO1-Czbq.js";import{T as v}from"./Tooltip-D-xDlIQt.js";import{R as k}from"./RechartsHookInspector-CoEhmUtx.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-B7v1DDAM.js";import"./Layer-BDK9FNAf.js";import"./resolveDefaultProps-sS_sTty7.js";import"./Text-ByeLUm9f.js";import"./DOMUtils-DEoaEH8S.js";import"./Label-Jb4Mxx6L.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BcAyFnZg.js";import"./zIndexSlice-bvE0U60U.js";import"./immer-BbMxIj75.js";import"./types-C5WHI9Oq.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-C1IOrkRp.js";import"./hooks-M6iVHT7c.js";import"./axisSelectors-DOBrNYLg.js";import"./d3-scale-DZf6r7Db.js";import"./string-B6fdYHAA.js";import"./RechartsWrapper-Bu4njem6.js";import"./index-DpK2I5Z8.js";import"./CartesianChart-B4Aoe2Gv.js";import"./chartDataContext-C_HtZ8Jd.js";import"./CategoricalChart-BY9PLUYv.js";import"./Symbols-Fu_kPQSr.js";import"./symbol-hh9GMAPc.js";import"./step-Fn6xoHVy.js";import"./useElementOffset-U_jB-i9n.js";import"./uniqBy-DdNKSDM3.js";import"./iteratee-Cnuc8_Ni.js";import"./Curve-BuzdDAXz.js";import"./AnimatedItems-u-a6HbBD.js";import"./useAnimationId-aZVu4KkL.js";import"./ActivePoints-J2-wBKLN.js";import"./Dot-CLoMxYtv.js";import"./RegisterGraphicalItemId-msSYtbNf.js";import"./ErrorBarContext-C1aiTzSR.js";import"./GraphicalItemClipPath-DJ_qeJGz.js";import"./SetGraphicalItem-C3QtaGQ_.js";import"./getRadiusAndStrokeWidthFromDot-CHyMZ3bi.js";import"./ActiveShapeUtils-BFF6hf2y.js";import"./isPlainObject-B64torjy.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DUhT-B0R.js";import"./Trapezoid-ZdBmwUBu.js";import"./Sector-zScvcglH.js";import"./Cross-Dj6JaYfd.js";import"./index-CZHbmvmq.js";import"./ChartSizeDimensions-Bx00VSUB.js";import"./OffsetShower-DPJMHPD2.js";import"./PlotAreaShower-DoIFP8gZ.js";const Mt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
          <RechartsHookInspector />
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
          <RechartsHookInspector />
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Xt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
