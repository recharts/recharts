import{R as t}from"./iframe-i0tdfO-S.js";import{g as y}from"./utils-ePvtT4un.js";import{Y as m}from"./YAxisArgs-CwatvU9z.js";import{Y as s}from"./YAxis-DpT96wDN.js";import{R as h}from"./zIndexSlice-kcLB36p_.js";import{L as A}from"./LineChart-DD8dnRUz.js";import{c as w}from"./Coordinate-geWwP0Ct.js";import{C as x}from"./CartesianGrid-BJy1eyof.js";import{X as f}from"./XAxis-DVXCxOsO.js";import{L as E}from"./Legend-De9VUwMG.js";import{L as n}from"./Line-Cm9DvNYq.js";import{T as v}from"./Tooltip-hnGeefGZ.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-DT2Ych2e.js";import"./Text-BMlLhZu5.js";import"./resolveDefaultProps-Cqgjjt0o.js";import"./DOMUtils-CUxE2jbS.js";import"./isWellBehavedNumber-BGsBu9W1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-CZv5OG2W.js";import"./index-C1dNy9AB.js";import"./index-BlLn1ZJf.js";import"./RechartsWrapper-CQ-K3_cR.js";import"./index-BsuycueP.js";import"./index-BBdkxuke.js";import"./throttle-yuh6eqF5.js";import"./axisSelectors-C9dKusfX.js";import"./d3-scale-Clxk0FTV.js";import"./renderedTicksSlice-xuaKpSF7.js";import"./CartesianAxis-CDi0h_Ul.js";import"./Layer-CsmYaDC8.js";import"./types-CcIZQOYN.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-C7h8s25b.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-B95UWo8G.js";import"./chartDataContext-DuTDnpGx.js";import"./CategoricalChart-DFB3mzsf.js";import"./Symbols-BI3PLQUq.js";import"./symbol-CkQQR2Y2.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CSiJWWdb.js";import"./uniqBy-CKF-LbxF.js";import"./iteratee-DkO0J_ik.js";import"./Curve-Dy9EB64d.js";import"./step-hH_hNvlA.js";import"./AnimatedItems-DHFbNXP7.js";import"./useAnimationId-OfLHi_5O.js";import"./ActivePoints-pXtGf72N.js";import"./Dot-CtPF4Cca.js";import"./RegisterGraphicalItemId-DtBmeLcC.js";import"./ErrorBarContext-FzqsPEvI.js";import"./GraphicalItemClipPath-BsfG3uc-.js";import"./SetGraphicalItem-DW3yQoWV.js";import"./graphicalItemIdentity-wnXl2DYz.js";import"./ActiveShapeUtils-EZQtDmwK.js";import"./Cross-BVPma9bA.js";import"./Rectangle-BEbMkxuP.js";import"./util-Dxo8gN5i.js";import"./Sector-JppCnCMA.js";const Wt={component:s,argTypes:m},b=r=>{if(r==="auto"||typeof r=="number")return r;const a=parseInt(r,10);return Number.isNaN(a)?120:a},o={render:r=>{const a=b(r.width);return t.createElement(h,{width:"100%",height:500},t.createElement(A,{width:600,height:300,data:w},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,null),t.createElement(s,{...r,width:a}),t.createElement(E,null),t.createElement(n,{dataKey:"y"}),t.createElement(v,null)))},args:{...y(m),dataKey:"pv",domain:[0,300],type:"number",allowDataOverflow:!0,tickMargin:20,angle:45,width:"120",label:{value:"The Axis Label",position:"center",angle:90}}},L=r=>{const{x:a,y:k,payload:C,padding:e}=r;return t.createElement("g",{transform:`translate(${a},${k})`},t.createElement("text",{x:0,y:0,dy:5,textAnchor:"end",fill:"#666",fontSize:"12"},C.value),e&&typeof e=="object"&&"top"in e&&t.createElement("text",{x:-5,y:0,dy:5,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},"T:",e.top," B:",e.bottom),e&&typeof e=="object"&&"top"in e&&e.top>10&&t.createElement("circle",{cx:-30,cy:0,r:3,fill:"#e74c3c",opacity:.7}),e&&typeof e=="string"&&t.createElement("text",{x:-5,y:0,dy:15,textAnchor:"end",fill:"#e74c3c",fontSize:"8"},e))},i={render:r=>{const a=[{category:"Product A",value:400,target:450},{category:"Product B",value:300,target:350},{category:"Product C",value:200,target:250},{category:"Product D",value:278,target:300},{category:"Product E",value:189,target:220}];return t.createElement(h,{width:"100%",height:500},t.createElement(A,{data:a},t.createElement(x,{strokeDasharray:"3 3"}),t.createElement(f,{dataKey:"category"}),t.createElement(s,{...r,tick:t.createElement(L,null),width:100}),t.createElement(n,{type:"monotone",dataKey:"value",stroke:"#3498db",name:"Actual"}),t.createElement(n,{type:"monotone",dataKey:"target",stroke:"#e74c3c",strokeDasharray:"5 5",name:"Target"}),t.createElement(v,null),t.createElement(E,null)))},args:{...y(m),padding:{top:25,bottom:35},width:100,tickMargin:10}};var p,c,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Ot=["API","YAxisCustomTickWithPadding"];export{o as API,i as YAxisCustomTickWithPadding,Ot as __namedExportsOrder,Wt as default};
