import{R as t}from"./iframe-DuosGyDB.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-0dGXX3NL.js";import{R as h}from"./zIndexSlice-Da09UpSD.js";import{L as A}from"./LineChart-xl1viAHd.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-Cg8lG5oY.js";import{X as f}from"./XAxis-C-4m1UDl.js";import{L as E}from"./Legend-eZbVNtkY.js";import{L as i}from"./Line-BjQkedG_.js";import{T as v}from"./Tooltip-BrMBPvou.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-CD5z-ltE.js";import"./Text-ws-7QaY4.js";import"./resolveDefaultProps-CFaFAnLx.js";import"./pageBackground-BOChA0aI.js";import"./isWellBehavedNumber-BR0iKwBs.js";import"./useId-5tXA_KMi.js";import"./useBackwardsCompatibleTheme-EzUoSKUQ.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-B7YuRzj4.js";import"./index-BIKpN8wQ.js";import"./index-CkmA4MDq.js";import"./axisSelectors-BhFgqUpp.js";import"./throttle-BFe2F0jb.js";import"./d3-scale-BcfysILW.js";import"./CartesianAxis-BQQINrGM.js";import"./Layer-kSYl9qai.js";import"./types-DpRgdAcC.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bhnw81l8.js";import"./index-Bx3uuCHN.js";import"./index-DB6X8Jkp.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-DqMyJeth.js";import"./index-C8gr5WFK.js";import"./CartesianChart-BF7NkNru.js";import"./chartDataContext-Fsi0dBi5.js";import"./CategoricalChart-CnszpMMB.js";import"./Symbols-BB8GDQjJ.js";import"./symbol-2BGeghEi.js";import"./path-DyVhHtw_.js";import"./useElementOffset-icNFqDBx.js";import"./uniqBy-Cc00XvmO.js";import"./iteratee-Dr0P3_26.js";import"./Curve-BLnV7n0Y.js";import"./step-BE4SoRR0.js";import"./activeStyles-Cx6m_4O3.js";import"./useAnimationId-DZvkGEgW.js";import"./dataEntryStyles-BoHQtdtS.js";import"./ActivePoints-0tjl7oMt.js";import"./Dot-CVHLTOCE.js";import"./ErrorBarContext-BL5frxgR.js";import"./GraphicalItemClipPath-Bpu4eZkp.js";import"./SetGraphicalItem-Cbz0EDFc.js";import"./getRadiusAndStrokeWidthFromDot-BHE1JVwz.js";import"./ActiveShapeUtils-HElctZzh.js";import"./useEffectiveDataKey-BuRZ7bwL.js";import"./Cross-RcbzNpk6.js";import"./Rectangle-xphMqkoD.js";import"./util-Dxo8gN5i.js";import"./Sector-BdKNyDn7.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
