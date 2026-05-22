import{e as t}from"./iframe-osYa99rW.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-CPpRvup6.js";import{g as h}from"./arrayEqualityCheck-DVAn2Veo.js";import{L as A}from"./LineChart-BDs5GNJB.js";import{a as b}from"./Coordinate-CcdTesrj.js";import{C as f}from"./CartesianGrid-B6UjWCCj.js";import{X as x}from"./XAxis-DB9q536o.js";import{L as E}from"./Legend-C2vcj-rA.js";import{L as n}from"./Line-C2qsCCMD.js";import{T as v}from"./Tooltip-m7Vdw8eH.js";import{R as k}from"./RechartsHookInspector-VtrkbRKP.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-C67x0626.js";import"./Layer-gnKUTyol.js";import"./resolveDefaultProps-e5wzBDkv.js";import"./Text-BLYIGASS.js";import"./DOMUtils-DNI7arDM.js";import"./Label-DAoBltIG.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-kQ2XKLeS.js";import"./zIndexSlice-DbxduRWl.js";import"./immer-C4kOpB_4.js";import"./types-D2LtkD4l.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-Jw-bjgRX.js";import"./hooks-CbohzQKL.js";import"./axisSelectors-jckpyKNb.js";import"./d3-scale-BGIasGRq.js";import"./RechartsWrapper-C7HrPqDt.js";import"./index-FVmQP7oK.js";import"./CartesianChart-qVL1bhzD.js";import"./chartDataContext-CTr_Fr3F.js";import"./CategoricalChart-KWj4YaNg.js";import"./Symbols-BgYAyf_A.js";import"./symbol-D1Jx74jR.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CZMoOZsh.js";import"./uniqBy-BYcGXJeH.js";import"./iteratee-DEaJE3ja.js";import"./Curve-DMV5yuc6.js";import"./step-BBN71zyD.js";import"./ReactUtils-Dd2jwjm5.js";import"./ActivePoints-42Our513.js";import"./Dot-DRU2iJQo.js";import"./RegisterGraphicalItemId-rIlloXLK.js";import"./ErrorBarContext-Xd9mG_11.js";import"./GraphicalItemClipPath-BJe2Wn_o.js";import"./SetGraphicalItem-DW948_Jf.js";import"./useAnimationId-CKNV6DVG.js";import"./getRadiusAndStrokeWidthFromDot-CGiLTsNp.js";import"./ActiveShapeUtils-CUIK7NEg.js";import"./Cross-JcJX91if.js";import"./Rectangle-D30liOk0.js";import"./Sector-_rfV5uw6.js";import"./index-DXz8B56j.js";import"./ChartSizeDimensions-Cg7YHQ1i.js";import"./OffsetShower-DqXXwFDQ.js";import"./PlotAreaShower-CXw6zCF-.js";const It={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Ot=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Ot as __namedExportsOrder,It as default};
