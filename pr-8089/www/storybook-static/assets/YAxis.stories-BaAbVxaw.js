import{R as t}from"./iframe-Dofq_iQ-.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CNyofDE0.js";import{R as h}from"./zIndexSlice-D1WV8xVK.js";import{L as A}from"./LineChart-Clg0lwmX.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-DoUIhGuN.js";import{X as f}from"./XAxis-BAcN42ay.js";import{L as E}from"./Legend-BpsZydhy.js";import{L as i}from"./Line-CxMmNUAz.js";import{T as v}from"./Tooltip-D82JgkIu.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./Label-hlz0weoU.js";import"./Text-DvhWb0Oj.js";import"./resolveDefaultProps-Z787kyQ6.js";import"./pageBackground-jkmkuUi_.js";import"./useId-Dit2o_XD.js";import"./ZIndexLayer-CuuRUF_K.js";import"./index-BtkEod5i.js";import"./index-37WXqDMb.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-CmsaI3Cf.js";import"./throttle-DKmFrtnD.js";import"./dataEntryStyles-BZNZhw1g.js";import"./axisSelectors-CqE-voO2.js";import"./d3-scale-Bd78fIJ9.js";import"./CartesianAxis-BkbAUDQ6.js";import"./Layer-DmIM376f.js";import"./types-B7VCcYuj.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DEI5ubGX.js";import"./index-qZlNdlLA.js";import"./index-Bsj9Z6Q4.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-CETzgtk4.js";import"./index-CYB006td.js";import"./CartesianChart-D36QcNNB.js";import"./chartDataContext-B2bZJU-K.js";import"./CategoricalChart-DTaKLLfl.js";import"./Symbols-BSqZO71K.js";import"./symbol-3INanWh5.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B6c3R0Fo.js";import"./uniqBy-pKrPA6ZI.js";import"./iteratee-eczRew1O.js";import"./isArguments-yB-y1yaH.js";import"./Curve-Beatw8ZQ.js";import"./step-g7A04fAl.js";import"./activeStyles-B73KwGvD.js";import"./useAnimationId-CwELIUBQ.js";import"./ActivePoints--oTriwIr.js";import"./Dot-CgHFserM.js";import"./RegisterGraphicalItemId-DtelKBLL.js";import"./ErrorBarContext-D73mtL4f.js";import"./SetGraphicalItem-DU742dNa.js";import"./getRadiusAndStrokeWidthFromDot-BcCSCHB7.js";import"./ActiveShapeUtils-R-VNi4BZ.js";import"./useEffectiveDataKey-B7xEEKli.js";import"./Cross-_ZcP0GkJ.js";import"./Rectangle-ywvlgolw.js";import"./util-Dxo8gN5i.js";import"./Sector-fCNxang1.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};export{o as API,n as YAxisCustomTickWithPadding,Xt as __namedExportsOrder,Mt as default};
