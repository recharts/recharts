import{R as t}from"./iframe-Ca32ubBP.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-wOxJ_8VY.js";import{R as h}from"./zIndexSlice-dHiwLFUj.js";import{L as A}from"./LineChart-1vQ2iz_4.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BwaCreiY.js";import{X as f}from"./XAxis-Doj-lEYw.js";import{L as E}from"./Legend-Ndh8y7nt.js";import{L as n}from"./Line-C8JVpIOW.js";import{T as v}from"./Tooltip-BK7CRZ-e.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DD1RmAzE.js";import"./Text-i5MeFzWV.js";import"./resolveDefaultProps-FNg74tNy.js";import"./DOMUtils-BJ447lE9.js";import"./isWellBehavedNumber-C-9KtVDX.js";import"./useId-BjxuxzLj.js";import"./useBackwardsCompatibleTheme-Ddp8u6f9.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BAqimWYO.js";import"./index-8HLzHw6r.js";import"./index-CHnduxoF.js";import"./RechartsWrapper-C_dCGHdd.js";import"./index-CHNh1dey.js";import"./index-Dge3NWQD.js";import"./throttle-B0sCMXOK.js";import"./axisSelectors-A6ndeoHc.js";import"./d3-scale-Do2gUorH.js";import"./renderedTicksSlice-CpRpGU6M.js";import"./CartesianAxis-Dfpoi9-r.js";import"./Layer-B0UktO7Z.js";import"./types-_9LccsBU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D1u_uw1Q.js";import"./chartDataContext-Dgyo9muf.js";import"./CategoricalChart-CBCGNfzQ.js";import"./Symbols-DPe3GKhA.js";import"./symbol-gQzWWZLj.js";import"./path-DyVhHtw_.js";import"./useElementOffset-B__IOwrq.js";import"./uniqBy-Vn-_Z9lW.js";import"./iteratee-C66mF7I5.js";import"./Curve-BTmElVc4.js";import"./step-CYvNd-lj.js";import"./AnimatedItems-CDoRaH70.js";import"./useAnimationId-B8VHZUPO.js";import"./ActivePoints-BBA7jI6r.js";import"./Dot-B4PeYlma.js";import"./RegisterGraphicalItemId-B_2qN3HQ.js";import"./ErrorBarContext-CAeoPaJo.js";import"./GraphicalItemClipPath-CrTkoGhX.js";import"./SetGraphicalItem-CnmA_FOG.js";import"./getRadiusAndStrokeWidthFromDot-BY_VbDBa.js";import"./ActiveShapeUtils-x7koemir.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./Cross-CpfAzeAt.js";import"./Rectangle-DLCrIZbS.js";import"./util-Dxo8gN5i.js";import"./Sector-B51nA7t4.js";const jt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=o.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Mt=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Mt as __namedExportsOrder,jt as default};
