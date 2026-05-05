import{e as t}from"./iframe-DftoLjMQ.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-_evmKux2.js";import{R as h}from"./arrayEqualityCheck-OUBI6cxl.js";import{L as A}from"./LineChart-CJGt3KAQ.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-AIv_Erh0.js";import{X as x}from"./XAxis-diXG-Ooh.js";import{L as E}from"./Legend-BWUyCpiN.js";import{L as n}from"./Line-BaarjASd.js";import{T as v}from"./Tooltip-U8E2AMmP.js";import{R as k}from"./RechartsHookInspector-BW_p22UR.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-D4w_zo3U.js";import"./Layer-Dsgs0O8o.js";import"./resolveDefaultProps-BarHlGRM.js";import"./Text-BLuQUWft.js";import"./DOMUtils-DS-WaQM8.js";import"./Label-OGw7wMde.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer--xl3uim8.js";import"./zIndexSlice--T96FzXv.js";import"./immer-CQJBkabG.js";import"./types-Bejjp4Hx.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-D9MmoYOr.js";import"./hooks-CtUEKUIT.js";import"./axisSelectors-wXsEFnMj.js";import"./d3-scale-BsmYBoZY.js";import"./RechartsWrapper-DHlVG8GT.js";import"./index-uEh81NxT.js";import"./CartesianChart-Dc_3s4TO.js";import"./chartDataContext-IpRtB3jy.js";import"./CategoricalChart-DhhIk46Q.js";import"./Symbols-xJuY3fVT.js";import"./symbol--t7F40kw.js";import"./step-DzOVAhhf.js";import"./useElementOffset-D9nHdrIo.js";import"./uniqBy-CvQpRBMV.js";import"./iteratee-C5N7-gfq.js";import"./ReactUtils-D8J0Scd8.js";import"./ActivePoints-CvxxlQO1.js";import"./Dot-BPJX98FX.js";import"./RegisterGraphicalItemId-BsfM9YTI.js";import"./ErrorBarContext-BqvDCGa4.js";import"./GraphicalItemClipPath-CA0a5dPY.js";import"./SetGraphicalItem-CtgQyVhP.js";import"./useAnimationId-HlRR6VOg.js";import"./getRadiusAndStrokeWidthFromDot-1sEj6j-N.js";import"./ActiveShapeUtils-KSU4yUqy.js";import"./isPlainObject-DhKwCKiu.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-CdclZ8ZW.js";import"./Trapezoid-Cfr8ELTn.js";import"./Sector-9UyeEGs-.js";import"./Curve-5-yobk2P.js";import"./Cross-B1GXGlDw.js";import"./index-l8sRLK9z.js";import"./ChartSizeDimensions-BJ7Qv0Pi.js";import"./OffsetShower-DBZtide3.js";import"./PlotAreaShower-DKTeWqRs.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
