import{R as t}from"./iframe-Bz6TqJnq.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-CRFRlUFA.js";import{R as h}from"./zIndexSlice-C-cqgMlF.js";import{L as A}from"./LineChart-CrUKSyKi.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BbGpbO3P.js";import{X as f}from"./XAxis-DVlM8vXe.js";import{L as E}from"./Legend-Ba21IbkL.js";import{L as i}from"./Line-DELGVTYz.js";import{T as v}from"./Tooltip-BoaaN165.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-lSot61nz.js";import"./Text-DOaj_kWf.js";import"./resolveDefaultProps-DEKZytWh.js";import"./DOMUtils-Cex05Ge6.js";import"./isWellBehavedNumber-M6S8uXi3.js";import"./useId-1b7xgL0h.js";import"./useBackwardsCompatibleTheme-yIhTdrUA.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DhhI2NR0.js";import"./index-BQLoICSq.js";import"./index-beBiy9wx.js";import"./RechartsWrapper--vq1vTqI.js";import"./axisSelectors-BfBX80u0.js";import"./throttle-BuIt2HDm.js";import"./d3-scale-twe7FoUl.js";import"./index-etoInMv6.js";import"./index-DlUolpmt.js";import"./renderedTicksSlice-DQraWAfi.js";import"./index-C9aozdfF.js";import"./CartesianAxis-DH-w_D5j.js";import"./Layer-BX7MhZ6S.js";import"./types-4BkRWtr0.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-DP7g5nZU.js";import"./chartDataContext-D2R1zViF.js";import"./CategoricalChart-CRL5ERGJ.js";import"./Symbols-BSgJkacr.js";import"./symbol-C6b2szSj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DaMWcsMn.js";import"./uniqBy-CQ7Y-pcX.js";import"./iteratee-DSPWK7cC.js";import"./Curve-M6KVk8IF.js";import"./step-BK8r0hX3.js";import"./AnimatedItems-DDH0_5C2.js";import"./useAnimationId-D4N1wqR_.js";import"./ActivePoints-BVtl5KJC.js";import"./Dot--D_QZvUF.js";import"./RegisterGraphicalItemId-D64byefQ.js";import"./ErrorBarContext-CGc5rrEx.js";import"./GraphicalItemClipPath-CDFQRsft.js";import"./SetGraphicalItem-DzfWk83Z.js";import"./getRadiusAndStrokeWidthFromDot-CF5ztDsQ.js";import"./ActiveShapeUtils-BxAOP67q.js";import"./useGraphicalItemIdentity-CDqVZsrI.js";import"./Cross-BznlOoGD.js";import"./Rectangle-nQBZL8n2.js";import"./util-Dxo8gN5i.js";import"./Sector-B0YiLuYU.js";const Mt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(i,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},n={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(i,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(i,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}},Xt=["API","YAxisCustomTickWithPadding"];var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
