import{R as t}from"./iframe-BKHpBCGR.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-BEhxTh9O.js";import{R as h}from"./zIndexSlice-MbsPskuO.js";import{L as A}from"./LineChart-BC33sX3k.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-B5m4_DSs.js";import{X as f}from"./XAxis-DTRZ1dWN.js";import{L as E}from"./Legend-CMp_bUgu.js";import{L as i}from"./Line-UOyYMjp1.js";import{T as v}from"./Tooltip-BPoeNbLz.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-O1JP__wG.js";import"./Text-DYCZls4m.js";import"./resolveDefaultProps-LMHkslvY.js";import"./pageBackground-CYge6A3w.js";import"./isWellBehavedNumber-DZ2Xn8RG.js";import"./useId-Dt-1BK0Z.js";import"./useBackwardsCompatibleTheme-C46GemJr.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BdmXZICd.js";import"./index-BGfSAvuv.js";import"./index-AIIPc7Ew.js";import"./axisSelectors-CJodVBjM.js";import"./throttle-3nfkHG5O.js";import"./d3-scale-CFmaNxVK.js";import"./CartesianAxis-mCcuS_Uy.js";import"./Layer-DybYLhVT.js";import"./types-Ck1lG8KT.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BZuStCiV.js";import"./index-MJAbFl6s.js";import"./index-D7XXjqey.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-D-Zfjt-o.js";import"./index-pfuxfga8.js";import"./CartesianChart-CXURKO2Z.js";import"./chartDataContext-BJRV3EGA.js";import"./CategoricalChart-sVMN8Krq.js";import"./Symbols-pNFInHGu.js";import"./symbol-BcjyMOs4.js";import"./path-DyVhHtw_.js";import"./useElementOffset-Cn98WGsz.js";import"./uniqBy-CShR7vUs.js";import"./iteratee-BNxeOl7Y.js";import"./Curve-DUSP7h70.js";import"./step-Dts2RvRs.js";import"./activeStyles-Ciq5Cwqo.js";import"./useAnimationId-yls0YfbP.js";import"./dataEntryStyles-dsuf4aHw.js";import"./ActivePoints-BAFHTjJh.js";import"./Dot-Ba-w2X1N.js";import"./ErrorBarContext-D-66_lvv.js";import"./GraphicalItemClipPath--201yH7F.js";import"./SetGraphicalItem-BcZa1iuc.js";import"./getRadiusAndStrokeWidthFromDot-DBGL35Fg.js";import"./ActiveShapeUtils-DQESG7Jg.js";import"./useEffectiveDataKey-BIsGwEM1.js";import"./Cross-azVbcZgi.js";import"./Rectangle-CDgGLfNl.js";import"./util-Dxo8gN5i.js";import"./Sector-kZE3ZYJf.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
