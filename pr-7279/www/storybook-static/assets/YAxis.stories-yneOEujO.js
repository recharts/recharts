import{e as t}from"./iframe-Gbg_l78M.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CS8VIEtE.js";import{Y as s}from"./YAxis-DZDs3GKO.js";import{R as h}from"./arrayEqualityCheck-B69LB4m3.js";import{L as A}from"./LineChart-eaZmFXO6.js";import{c as b}from"./Coordinate-geWwP0Ct.js";import{C as f}from"./CartesianGrid-BMhBEEa4.js";import{X as x}from"./XAxis-DY33qp1b.js";import{L as E}from"./Legend-C9X7UUEv.js";import{L as n}from"./Line-4pnz_hNM.js";import{T as v}from"./Tooltip-D5agznPE.js";import{R as k}from"./RechartsHookInspector-Do2lkGOS.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-Dca3a3op.js";import"./Layer-BI5znRpT.js";import"./resolveDefaultProps-sMeqIZjn.js";import"./Text-BbIMZo50.js";import"./DOMUtils-BEdmeFzJ.js";import"./Label-C97vZCUD.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cu_ZYhKd.js";import"./zIndexSlice-BsUMgwVy.js";import"./immer-mU5ngVSZ.js";import"./types-6-jxyL20.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CfnOktJ2.js";import"./hooks-BX9UIUih.js";import"./axisSelectors-BhOsWb8H.js";import"./d3-scale-B1Xdl3mZ.js";import"./RechartsWrapper-B733cAvp.js";import"./index-Ck6DfcF7.js";import"./CartesianChart-D0_pR8lQ.js";import"./chartDataContext-DKgbTOGI.js";import"./CategoricalChart-CF19xo_7.js";import"./Symbols-DdxMLZNU.js";import"./symbol-gfqsi-zR.js";import"./step-BMA_kAfe.js";import"./useElementOffset-B5ago7eB.js";import"./uniqBy-D3sIEuXx.js";import"./iteratee-Bz9748e7.js";import"./ReactUtils-BEyTjZ-J.js";import"./ActivePoints-CLdEaCHn.js";import"./Dot-DiubYT5n.js";import"./RegisterGraphicalItemId-B4Pbzoa5.js";import"./ErrorBarContext-muYUytku.js";import"./GraphicalItemClipPath-C6vmlIdz.js";import"./SetGraphicalItem-BeRS8RAb.js";import"./useAnimationId-FFZ8e1iF.js";import"./getRadiusAndStrokeWidthFromDot-qW4tViY-.js";import"./ActiveShapeUtils-BF5Ec1rO.js";import"./isPlainObject-C5_xiZ-_.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-Ao9F5Oc0.js";import"./Trapezoid-B9yBSbp-.js";import"./Sector-NBw4H--I.js";import"./Curve-CLZ73sU1.js";import"./Cross-DEFXd5kS.js";import"./index-Dqxuu1t4.js";import"./ChartSizeDimensions-BLrRxRyE.js";import"./OffsetShower-C_0qPv4p.js";import"./PlotAreaShower-C7q1PybE.js";const jt={component:s,argTypes:m},L=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=L(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:b},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null),t.createElement(k,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},T=r=>{const{x:a,y:C,payload:w,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${C})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},w.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(f,{strokeDasharray:"3 3"}),t.createElement(x,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(T,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null),t.createElement(k,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var c,p,l;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
