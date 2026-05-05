import{e as t}from"./iframe-r2w7kZeJ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-I9saElLN.js";import{R as h}from"./arrayEqualityCheck-0L0A4nkz.js";import{L as A}from"./LineChart-DqWUz7U1.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-B9Ga4aKS.js";import{X as x}from"./XAxis-CW9ZaA2b.js";import{L as E}from"./Legend-05jea6bq.js";import{L as n}from"./Line-z9zeEmq5.js";import{T as v}from"./Tooltip-CFWaUU-U.js";import{R as k}from"./RechartsHookInspector-DcB-Xcfd.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DqNMO4sJ.js";import"./Layer-CMwqxUY2.js";import"./resolveDefaultProps-EjMTnW0n.js";import"./Text-DLc1wT1a.js";import"./DOMUtils-KJq6QJZu.js";import"./Label-m6h3W7WS.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CC246p5z.js";import"./zIndexSlice-DqYPZFIv.js";import"./immer-CfvCTpDj.js";import"./types-ywkvGoUt.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-B-NBeGNG.js";import"./hooks-B_Z23ri5.js";import"./axisSelectors-CJgn9_ry.js";import"./d3-scale-CTtR7bXz.js";import"./RechartsWrapper-1HJqk7Yh.js";import"./index-W-AgMbp-.js";import"./CartesianChart-BFAKYLf8.js";import"./chartDataContext-BjsyC2cu.js";import"./CategoricalChart-Beyzarg4.js";import"./Symbols-CbDfRlok.js";import"./symbol-JIUkL0GL.js";import"./step-CB3ZoZU9.js";import"./useElementOffset-Cp48T0Gk.js";import"./uniqBy-DkZlGKl-.js";import"./iteratee-BY0-7en0.js";import"./ReactUtils-BYDoU0L1.js";import"./ActivePoints-Ddlw9Tet.js";import"./Dot-JZESmYel.js";import"./RegisterGraphicalItemId-Bf-Aw6v0.js";import"./ErrorBarContext--RrhajOR.js";import"./GraphicalItemClipPath-uc4YpIA_.js";import"./SetGraphicalItem-C7uPVjvE.js";import"./useAnimationId-BkxSeEj0.js";import"./getRadiusAndStrokeWidthFromDot-B1ykn1OV.js";import"./ActiveShapeUtils-Df9SSVU9.js";import"./isPlainObject--i_1cxYd.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DvpuUb1d.js";import"./Trapezoid-BCSEHN2t.js";import"./Sector-D4bQnZgU.js";import"./Curve-E_V9yRSe.js";import"./Cross-CL7La1tu.js";import"./index-Dof6etCE.js";import"./ChartSizeDimensions-lBZtOA5X.js";import"./OffsetShower-vABa0YEq.js";import"./PlotAreaShower-BZ07GFyt.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
