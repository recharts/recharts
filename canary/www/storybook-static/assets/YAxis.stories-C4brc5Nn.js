import{R as t}from"./iframe-DlbVoy8b.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BhrY96Pd.js";import{R as h}from"./zIndexSlice-DIPR8J8Q.js";import{L as A}from"./LineChart-D9572nth.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Ba7QntMw.js";import{X as f}from"./XAxis-S-cm4cjH.js";import{L as E}from"./Legend-CmCZgCji.js";import{L as i}from"./Line-BDb9qYvA.js";import{T as v}from"./Tooltip-Dx6POBvv.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-Db_JATF8.js";import"./Text-D-UClZ_j.js";import"./resolveDefaultProps-DXzjMp61.js";import"./pageBackground-CUuPx32S.js";import"./ZIndexLayer-bE8wUUDO.js";import"./index-CDdiRPnr.js";import"./index-CPhEmyt7.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DH-8MkIE.js";import"./throttle-DlhUrerR.js";import"./axisSelectors-C1oz2VfT.js";import"./d3-scale-wuSABge9.js";import"./CartesianAxis-xtm5bwXL.js";import"./Layer-Cgk1UHKb.js";import"./types-wgD9JhdB.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-GxAdOI9L.js";import"./index-CPt_GVUx.js";import"./index-D-eNMO6C.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-D0Cl8XbA.js";import"./index-CIlMrkEO.js";import"./CartesianChart-fxjI_rYy.js";import"./ZIndexPortal-BXiuLmxD.js";import"./CategoricalChart-C4dlmPak.js";import"./Symbols-pvCFqWA7.js";import"./symbol-Con-2uFn.js";import"./path-DyVhHtw_.js";import"./useElementOffset-BikB_Nzb.js";import"./uniqBy-dmJ8LW9D.js";import"./iteratee-ZueROYHY.js";import"./isArguments-yB-y1yaH.js";import"./Curve-CwM7Cya8.js";import"./step-D9Q180Zj.js";import"./LabelList-DZdmLQwZ.js";import"./ActivePoints-nWjJ13Ya.js";import"./Dot-C73t_xwp.js";import"./activeStyles-68fYVlFc.js";import"./useAnimationId-69ly1h0S.js";import"./dataEntryStyles-CWf0jd4a.js";import"./ErrorBarContext-DTMhIhTa.js";import"./SetGraphicalItem--R52djyG.js";import"./getRadiusAndStrokeWidthFromDot-BM1c-Ckc.js";import"./ActiveShapeUtils-hcn-O4rR.js";import"./useEffectiveDataKey-Cxmpzb2d.js";import"./Cross-BZ_YBMHg.js";import"./Rectangle-6c5uuZ_V.js";import"./util-Dxo8gN5i.js";import"./Sector-Ce4Tme9N.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Mt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
