import{e as t}from"./iframe-BvixMVLJ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-CtSbpL5M.js";import{R as h}from"./arrayEqualityCheck-9JafNuHb.js";import{L as A}from"./LineChart-xOkCIs0R.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-C3NbQITh.js";import{X as x}from"./XAxis-DccioUx7.js";import{L as E}from"./Legend-BVL_p9V3.js";import{L as n}from"./Line-D2x4yot2.js";import{T as v}from"./Tooltip-BjAJgCsl.js";import{R as k}from"./RechartsHookInspector-B7OCtou7.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Bc1lTLgz.js";import"./Layer-E6_PJRcD.js";import"./resolveDefaultProps-CPqr6DGH.js";import"./Text-eQ3pJOEs.js";import"./DOMUtils-DEgurZZA.js";import"./Label-2bgwwMrL.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BQCBZf3p.js";import"./zIndexSlice-Dt-OH-0J.js";import"./immer-CaX280hR.js";import"./types-C4LPRE4X.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Bakbxnfn.js";import"./hooks-CmxNexDu.js";import"./axisSelectors-CZAHgbVu.js";import"./d3-scale-DvCQBID5.js";import"./RechartsWrapper-B9hDtRNp.js";import"./index-4u6l2t3f.js";import"./CartesianChart-C8rmaTr8.js";import"./chartDataContext-H28vHODo.js";import"./CategoricalChart-B9R3Zf2d.js";import"./Symbols-Bp2oN4pa.js";import"./symbol-I_8-paOM.js";import"./step-DGFNdhZX.js";import"./useElementOffset-CYT4WsBs.js";import"./uniqBy-Cz8jk1Wp.js";import"./iteratee-CqaQO7ZM.js";import"./ReactUtils-CX2Z3mNI.js";import"./ActivePoints-B9v85k-m.js";import"./Dot-BBC1jxnt.js";import"./RegisterGraphicalItemId-BfUUoebv.js";import"./ErrorBarContext-CY1gh6Fr.js";import"./GraphicalItemClipPath-CqZBK23Z.js";import"./SetGraphicalItem-D9gH1oTH.js";import"./useAnimationId-BG6xyOIZ.js";import"./getRadiusAndStrokeWidthFromDot-D5L1c2bL.js";import"./ActiveShapeUtils-DIK_h4fj.js";import"./isPlainObject-Bwvz8CoG.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CIrtZjOU.js";import"./Trapezoid-zjet3lxO.js";import"./Sector-CuxTQcgV.js";import"./Curve-D-7l7mPW.js";import"./Cross-JTyiahNE.js";import"./index-CWh6xOze.js";import"./ChartSizeDimensions-j35P-O-9.js";import"./OffsetShower-DT-VFUR7.js";import"./PlotAreaShower-v_ea9rYC.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
