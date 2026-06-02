import{P as y,c as e}from"./iframe-DCxmmXwr.js";import"./index-DDgPfSlI.js";import{g as l}from"./utils-ePvtT4un.js";import{T as s}from"./TooltipArgs-B4vqbkYQ.js";import{T as i,D as $e}from"./Tooltip-BqWK_gTc.js";import{g as p}from"./zIndexSlice-D5dh4jLY.js";import{C as h}from"./ComposedChart-CBS3HMO1.js";import{p as m}from"./Page-DPte-9pC.js";import{X as v}from"./XAxis-BjsM6oGC.js";import{Y as T}from"./YAxis-BdatH0tB.js";import{L as n}from"./Line-IALvE5xR.js";import{B as g}from"./Bar-69ql2Qbe.js";import{L as j}from"./LineChart-Bh60tRCz.js";import{B as M}from"./BarChart-DlKyl0if.js";import{C as Pe}from"./CartesianGrid-BiDkRolY.js";import{L as Ne}from"./Legend-D_VZHv2d.js";import{A as ze}from"./Area-Cc7NRsm3.js";import{R as Ge}from"./RadialBarChart-YzMJqShT.js";import{R as P}from"./RadialBar-CtS1Xhuk.js";import"./preload-helper-Dp1pzeXC.js";import"./index-Mzvapta9.js";import"./immer-SgEFwxUu.js";import"./get-BGMlQ-Gx.js";import"./resolveDefaultProps-Dbw1fq_o.js";import"./useAnimationId-D36I95JC.js";import"./useElementOffset-DjjxYU9a.js";import"./uniqBy-Bvj1oplb.js";import"./iteratee-CNGuNOZ0.js";import"./RechartsWrapper-BIau-2yw.js";import"./index-VwBqvb6i.js";import"./index-DgYh_LA8.js";import"./renderedTicksSlice-DSZVgTAV.js";import"./axisSelectors-dhV3Z94_.js";import"./d3-scale-Bu_zrpDn.js";import"./isWellBehavedNumber-CpP0Zk3Z.js";import"./PolarUtils-CTnnDHZv.js";import"./types-gNnCO6KJ.js";import"./Curve-lML4pT7n.js";import"./step-BzmHC3AY.js";import"./path-DyVhHtw_.js";import"./Cross-We-WAQEY.js";import"./Rectangle-CJU7mBdh.js";import"./Sector-BvFMDHDl.js";import"./ZIndexLayer-DYE1lO3r.js";import"./CartesianChart-D-fZCIkl.js";import"./chartDataContext-PHEEBUXD.js";import"./CategoricalChart-DfNs-HF3.js";import"./CartesianAxis-Bc9Tdb6N.js";import"./Layer-BBh4PyoV.js";import"./Text-BQlyDcDw.js";import"./DOMUtils-BtWg_eMC.js";import"./Label-BxDF9pHP.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./ReactUtils-UlfCGyqA.js";import"./ActivePoints-Dyjkd6x5.js";import"./Dot-CpTGA67i.js";import"./RegisterGraphicalItemId-Bf4FTeRp.js";import"./ErrorBarContext-VLRUzxSd.js";import"./GraphicalItemClipPath-BgB5Pb70.js";import"./SetGraphicalItem-CTm0YcCQ.js";import"./getRadiusAndStrokeWidthFromDot-BV7amyi3.js";import"./ActiveShapeUtils-cF9iV1xd.js";import"./tooltipContext-audjeD95.js";import"./tiny-invariant-CopsF_GD.js";import"./getZIndexFromUnknown-D83IOCDx.js";import"./graphicalItemSelectors-Byb2PPwp.js";import"./Symbols-DZ5_o2ZZ.js";import"./symbol-B72_j4nQ.js";import"./PolarChart-npLlgsTT.js";import"./polarScaleSelectors-4RbwZ4Yq.js";import"./polarSelectors-C5O7HcM7.js";function*_e(t){let o=t;for(o>0&&o<1&&(o=Math.round(o*1e3));o<0;)o+=65537;for(;;)o=(75*o+74)%65537,yield Math.round(o)}function H(t,a,r){return t.next().value%(r-a)+a}function Je(t,a){const r=[],d=_e(a);for(let o=0;o<t;o++)r.push({label:`Iter: ${o}`,x:H(d,100,300),y:H(d,400,800),z:H(d,1e3,2e3)});return r}y.createContext(null);e.memo(function({onClick:a,onMouseMove:r,onMouseLeave:d,onMouseDown:o,onMouseUp:u,onMouseEnter:c,pointerEvents:Xe="none",fill:Ye="transparent",cursor:Ue}){return e.createElement(e.Fragment,null,e.createElement("rect",{x:0,y:0,width:"100%",height:"100%",fill:Ye,style:{pointerEvents:Xe,cursor:Ue},onClick:a,onMouseMove:r,onMouseLeave:d,onMouseDown:o,onMouseUp:u,onMouseEnter:c}))});const va={argTypes:s,component:i},W={render:t=>e.createElement(p,{width:"100%",height:400},e.createElement(h,{data:m},e.createElement(v,{dataKey:"name"}),e.createElement(T,null),e.createElement(i,{...t}),e.createElement(n,{dataKey:"uv"})))},C={...W,args:{...l(s),active:!0}},E={render:t=>e.createElement(j,{width:500,height:300,data:m,accessibilityLayer:!0,margin:{top:5,right:5,bottom:5,left:0}},e.createElement(Pe,{stroke:"#eee",strokeDasharray:"5 5"}),e.createElement(v,{dataKey:"name"}),e.createElement(T,null),e.createElement(i,{...t}),e.createElement(n,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),e.createElement(n,{type:"monotone",dataKey:"pv",stroke:"#82ca9d"})),args:{...l(s),defaultIndex:2}},A={render:t=>{const[a,r]=e.useState(!1),[d,o]=e.useState({}),u=c=>(!a&&c.payload&&c.payload.length>0&&c.coordinate.x!==d.x&&o({payload:c.payload,x:c.coordinate.x,label:c.label}),e.createElement($e,{...c,payload:c.tooltipData.payload??c.payload,label:c.tooltipData.label??c.label}));return e.createElement(p,{width:"100%",height:500},e.createElement(h,{data:m,onClick:()=>{r(!a)}},e.createElement(i,{...t,position:{y:0,x:d.x},content:e.createElement(u,{tooltipData:d})}),e.createElement(n,{dataKey:"uv"}),e.createElement(g,{dataKey:"pv"})))},description:"This example shows how to lock the tooltip to a specific position. Click on the chart to show fix the Tooltip.",args:{...l(s)}},w={render:t=>{const[a,r]=y.useState(1.2),d=y.useCallback(()=>r(u=>u+.1),[]),o=y.useCallback(()=>r(u=>u-.1),[]);return e.createElement("div",{style:{width:"100%"}},e.createElement("h2",null,"No transform: scale"),e.createElement("div",{style:{display:"flex"}},e.createElement(p,{width:"100%",height:200},e.createElement(h,{data:m},e.createElement(v,{dataKey:"name"}),e.createElement(i,null),e.createElement(n,{dataKey:"uv"}),e.createElement(g,{dataKey:"pv"})))),e.createElement("h2",null,"Parent container",` <div style={{transform: scale(${a})}}> ...`),e.createElement("button",{type:"button",onClick:d},"Zoom In"),e.createElement("button",{type:"button",onClick:o},"Zoom Out"),e.createElement("div",{style:{transform:`scale(${a})`,transformOrigin:"50% 0"}},e.createElement(p,{width:"100%",height:200},e.createElement(h,{data:m},e.createElement(v,{dataKey:"name"}),e.createElement(n,{dataKey:"uv"}),e.createElement(g,{dataKey:"pv"}),e.createElement(i,{...t})))))},description:"This example shows if Tooltip is shown correctly when parent component use transform:scale styling",args:{...l(s)}},qe=[{category:"A",value:.2},{category:"B",value:.3},{category:"C",value:.5},{category:"D",value:.6},{category:"E",value:.7},{category:"F",value:.4}],Qe=[{category:"A",value:null},{category:"B",value:null},{category:"C",value:null},{category:"D",value:.2},{category:"E",value:.4},{category:"F",value:.6}],b={render:t=>e.createElement(p,{width:"100%",height:500},e.createElement(h,{data:qe},e.createElement(v,{dataKey:"category",type:"category",allowDuplicatedCategory:!1}),e.createElement(T,{dataKey:"value"}),e.createElement(i,{...t}),e.createElement(ze,{dataKey:"value"}),e.createElement(n,{dataKey:"value",data:Qe}))),args:{...l(s)}},S={...W,args:{...l(s),trigger:"click"}},Ve=({active:t,payload:a})=>e.createElement("div",{style:{backgroundColor:"#5b63ffe7",padding:"10px",borderRadius:"10px",boxShadow:"1px 2px 10px -2px #7873ffb1",visibility:t?"visible":"hidden"}},a==null?void 0:a.map(r=>e.createElement("p",{key:r.name,style:{borderStyle:"solid 1px",fontSize:"13px",fontWeight:"600",fontFamily:"sans-serif",color:"#fff"}},`${r.name} : ${r.value}`))),x={...W,args:{...l(s),content:e.createElement(Ve,null),trigger:"hover"}},K={render:t=>{const[a,r]=[600,300];return e.createElement(p,{width:"100%",height:r},e.createElement(h,{width:a,height:r,margin:{top:20,right:20,bottom:20,left:20},data:Je(1e3,334058656)},e.createElement(i,{...t}),e.createElement(n,{dataKey:"x"}),e.createElement(n,{dataKey:"y"}),e.createElement(n,{dataKey:"z"})))},args:{...l(s)}},R={render:t=>{const[a,r]=[600,300];return e.createElement(p,{width:"100%",height:r},e.createElement(h,{width:a,height:r,margin:{top:20,right:20,bottom:20,left:20},data:m},e.createElement(i,{...t}),e.createElement(n,{dataKey:"uv"}),e.createElement(n,{dataKey:"pv",hide:!0})))},args:{...l(s),includeHidden:!0}},k={render:t=>e.createElement(p,{width:"100%",height:400},e.createElement(M,{data:m},e.createElement(g,{dataKey:"uv",fill:"green"}),e.createElement(g,{dataKey:"pv",fill:"red"}),e.createElement(i,{...t}))),args:{...l(s),shared:!1,defaultIndex:2,active:!0}},L={render:t=>e.createElement(p,{width:"100%",height:400},e.createElement(Ge,{data:m},e.createElement(P,{dataKey:"uv",fill:"green"}),e.createElement(P,{dataKey:"pv",fill:"red"}),e.createElement(i,{...t}))),args:{...l(s),shared:!1,defaultIndex:2,active:!0}},f={render:t=>e.createElement(j,{width:"100%",height:50,responsive:!0,data:m},e.createElement(i,{...t}),e.createElement(n,{dataKey:"uv",fill:"green"}),e.createElement(n,{dataKey:"pv",fill:"red"}),e.createElement(n,{dataKey:"amt",fill:"amt"})),args:{...l(s),defaultIndex:2,active:!0}},D={render:t=>{const[a,r]=y.useState(null);return e.createElement(e.Fragment,null,e.createElement(p,{width:"100%",height:400},e.createElement(j,{data:m},a&&e.createElement(i,{...t,portal:a}),e.createElement(n,{dataKey:"uv",fill:"green"}),e.createElement(n,{dataKey:"pv",fill:"red"}))),e.createElement("div",{ref:d=>{a==null&&d!=null&&r(d)}},e.createElement("p",null,"Inspect the resulting HTML to see that the Tooltip element is rendered according to the portal ref."),e.createElement("p",null,"You now control the container the Tooltip renders in, as well as style attributes such as width, height, etc. Those can be managed via the Tooltip wrapperStyle prop.")))},args:{...l(s),wrapperStyle:{width:"25%",marginLeft:10},defaultIndex:3,active:!0}},Ze=[{Triggers:10,date:"Jan 1, 2025"},{Triggers:10,date:"Feb 28, 2025"}],B={render:t=>{const[,a]=y.useState(!0);return e.createElement("div",null,e.createElement("div",{style:{height:2e3,width:300}},e.createElement("p",null,"There is a chart here; scroll down")),e.createElement("div",{style:{height:250,width:300}},e.createElement("button",{type:"button",onClick:()=>a(r=>!r)},"set random unused state"),e.createElement(p,null,e.createElement(j,{data:Ze,style:{border:"1px solid black"}},e.createElement(i,{...t}),e.createElement(n,{dataKey:"Triggers"})))))},args:{...l(s)}},I={render:t=>{const[,a]=y.useState(!0);return e.createElement("div",null,e.createElement("div",{style:{height:2e3,width:300}},e.createElement("p",null,"There is a chart here; scroll down")),e.createElement("div",{style:{height:250,width:300}},e.createElement("button",{type:"button",onClick:()=>a(r=>!r)},"set random unused state"),e.createElement(p,null,e.createElement(M,{data:Ze,style:{border:"1px solid black"}},e.createElement(g,{dataKey:"Triggers"}),e.createElement(i,{...t})))))},args:{...l(s),shared:!1}},O={render:t=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr"}},e.createElement("div",{style:{width:"200px"}}),e.createElement("div",{style:{position:"relative"}},e.createElement(M,{width:730,height:250,data:m},e.createElement(Pe,{strokeDasharray:"3 3"}),e.createElement(v,{dataKey:"name"}),e.createElement(T,null),e.createElement(i,{...t}),e.createElement(Ne,null),e.createElement(g,{dataKey:"pv",fill:"#8884d8"}),e.createElement(g,{dataKey:"uv",fill:"#82ca9d"})))),args:{...l(s),cursor:!1}},F={render:t=>e.createElement(p,{width:"100%",height:400},e.createElement(h,{data:m},e.createElement(v,{dataKey:"name"}),e.createElement(T,null),e.createElement(n,{dataKey:"uv"}),e.createElement(i,{...t}))),args:{...l(s),offset:-50,wrapperStyle:{width:100}}};var Z,X,Y;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    active: true
  }
}`,...(Y=(X=C.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var U,$,N;E.parameters={...E.parameters,docs:{...(U=E.parameters)==null?void 0:U.docs,source:{originalSource:`{
  render: (args: Args) => <LineChart width={500} height={300} data={pageData} accessibilityLayer margin={{
    top: 5,
    right: 5,
    bottom: 5,
    left: 0
  }}>
      <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip {...args} />
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
    </LineChart>,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    defaultIndex: 2
  }
}`,...(N=($=E.parameters)==null?void 0:$.docs)==null?void 0:N.source}}};var z,G,_;A.parameters={...A.parameters,docs:{...(z=A.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [isLocked, setIsLocked] = React.useState(false);
    // The TooltipData contains the payload, the label and the x position of the tooltip.
    // Their update is interrupted by the click event, so we need to store them in a state.
    const [tooltipData, setTooltipData] = React.useState<{
      payload?: unknown[];
      label?: string;
      x?: number;
    }>({});

    // A custom Tooltip that updates the payload of the tooltip if the
    // chart is locked, and either way always renders using the normal Tooltip.
    const CustomTooltip = (props: any) => {
      // If the chart is locked, and the payload is not empty, and the
      // x position of the tooltip has changed, update the tooltipData.
      if (!isLocked && props.payload && props.payload.length > 0 && props.coordinate.x !== tooltipData.x) {
        setTooltipData({
          payload: props.payload,
          x: props.coordinate.x,
          label: props.label
        });
      }
      return <DefaultTooltipContent {...props} payload={props.tooltipData.payload ?? props.payload} label={props.tooltipData.label ?? props.label} />;
    };
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={pageData}
      // Clicking the chart locks the tooltip to the current position, and fixes its content.
      onClick={() => {
        setIsLocked(!isLocked);
      }}>
          <Tooltip {...args} position={{
          y: 0,
          x: tooltipData.x
        }} // The y position fixes the Tooltip to the top of the chart.
        content={<CustomTooltip tooltipData={tooltipData} />} />
          <Line dataKey="uv" />
          <Bar dataKey="pv" />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  description: 'This example shows how to lock the tooltip to a specific position. Click on the chart to show fix the Tooltip.',
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...(_=(G=A.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var J,q,Q;w.parameters={...w.parameters,docs:{...(J=w.parameters)==null?void 0:J.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [scale, setScale] = useState(1.2);
    const handleZoomIn = useCallback(() => setScale(s => s + 0.1), []);
    const handleZoomOut = useCallback(() => setScale(s => s - 0.1), []);
    return <div style={{
      width: '100%'
    }}>
        <h2>No transform: scale</h2>
        <div style={{
        display: 'flex'
      }}>
          <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={pageData}>
              <XAxis dataKey="name" />
              <Tooltip />
              <Line dataKey="uv" />
              <Bar dataKey="pv" />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <h2>
          Parent container
          {\` <div style={{transform: scale(\${scale})}}> ...\`}
        </h2>
        <button type="button" onClick={handleZoomIn}>
          Zoom In
        </button>
        <button type="button" onClick={handleZoomOut}>
          Zoom Out
        </button>
        <div style={{
        transform: \`scale(\${scale})\`,
        transformOrigin: '50% 0'
      }}>
          <ResponsiveContainer width="100%" height={200}>
            <ComposedChart data={pageData}>
              <XAxis dataKey="name" />
              <Line dataKey="uv" />
              <Bar dataKey="pv" />
              <Tooltip {...args} />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
      </div>;
  },
  description: 'This example shows if Tooltip is shown correctly when parent component use transform:scale styling',
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...(Q=(q=w.parameters)==null?void 0:q.docs)==null?void 0:Q.source}}};var V,ee,te;b.parameters={...b.parameters,docs:{...(V=b.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={500}>
        <ComposedChart data={areaData}>
          <XAxis dataKey="category" type="category" allowDuplicatedCategory={false} />
          <YAxis dataKey="value" />
          <Tooltip {...args} />
          <Area dataKey="value" />
          <Line dataKey="value" data={lineData} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...(te=(ee=b.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,re,oe;S.parameters={...S.parameters,docs:{...(ae=S.parameters)==null?void 0:ae.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    trigger: 'click'
  }
}`,...(oe=(re=S.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ne,se,ie;x.parameters={...x.parameters,docs:{...(ne=x.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    content: <CustomContent />,
    trigger: 'hover'
  }
}`,...(ie=(se=x.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var le,de,ce;K.parameters={...K.parameters,docs:{...(le=K.parameters)==null?void 0:le.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={generateMockData(1000, 334058656)}>
          <Tooltip {...args} />
          <Line dataKey="x" />
          <Line dataKey="y" />
          <Line dataKey="z" />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...(ce=(de=K.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,he;R.parameters={...R.parameters,docs:{...(pe=R.parameters)==null?void 0:pe.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [surfaceWidth, surfaceHeight] = [600, 300];
    return <ResponsiveContainer width="100%" height={surfaceHeight}>
        <ComposedChart width={surfaceWidth} height={surfaceHeight} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }} data={pageData}>
          <Tooltip {...args} />
          <Line dataKey="uv" />
          <Line dataKey="pv" hide />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    includeHidden: true
  }
}`,...(he=(me=R.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ge,ue,ye;k.parameters={...k.parameters,docs:{...(ge=k.parameters)==null?void 0:ge.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <BarChart data={pageData}>
          <Bar dataKey="uv" fill="green" />
          <Bar dataKey="pv" fill="red" />
          <Tooltip {...args} />
        </BarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    shared: false,
    defaultIndex: 2,
    active: true
  }
}`,...(ye=(ue=k.parameters)==null?void 0:ue.docs)==null?void 0:ye.source}}};var ve,fe,Te;L.parameters={...L.parameters,docs:{...(ve=L.parameters)==null?void 0:ve.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <RadialBarChart data={pageData}>
          <RadialBar dataKey="uv" fill="green" />
          <RadialBar dataKey="pv" fill="red" />
          <Tooltip {...args} />
        </RadialBarChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    shared: false,
    defaultIndex: 2,
    active: true
  }
}`,...(Te=(fe=L.parameters)==null?void 0:fe.docs)==null?void 0:Te.source}}};var Ce,Ee,Ae,we,be;f.parameters={...f.parameters,docs:{...(Ce=f.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <LineChart width="100%" height={50} responsive data={pageData}>
        <Tooltip {...args} />
        <Line dataKey="uv" fill="green" />
        <Line dataKey="pv" fill="red" />
        <Line dataKey="amt" fill="amt" />
      </LineChart>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    defaultIndex: 2,
    active: true
  }
}`,...(Ae=(Ee=f.parameters)==null?void 0:Ee.docs)==null?void 0:Ae.source},description:{story:`https://github.com/recharts/recharts/issues/2458

Tooltip that's taller than the chart itself should not clip.
It should instead overflow the chart.`,...(be=(we=f.parameters)==null?void 0:we.docs)==null?void 0:be.description}}};var Se,xe,Ke;D.parameters={...D.parameters,docs:{...(Se=D.parameters)==null?void 0:Se.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [portalRef, setPortalRef] = useState<HTMLElement | null>(null);
    return <>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={pageData}>
            {portalRef && <Tooltip {...args} portal={portalRef} />}
            <Line dataKey="uv" fill="green" />
            <Line dataKey="pv" fill="red" />
          </LineChart>
        </ResponsiveContainer>
        <div ref={node => {
        if (portalRef == null && node != null) {
          setPortalRef(node);
        }
      }}>
          <p>Inspect the resulting HTML to see that the Tooltip element is rendered according to the portal ref.</p>
          <p>
            You now control the container the Tooltip renders in, as well as style attributes such as width, height,
            etc. Those can be managed via the Tooltip wrapperStyle prop.
          </p>
          {/* The Tooltip will render here */}
        </div>
      </>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    wrapperStyle: {
      width: '25%',
      marginLeft: 10
    },
    defaultIndex: 3,
    active: true
  }
}`,...(Ke=(xe=D.parameters)==null?void 0:xe.docs)==null?void 0:Ke.source}}};var Re,ke,Le;B.parameters={...B.parameters,docs:{...(Re=B.parameters)==null?void 0:Re.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [, setRandomUnusedState] = useState(true);
    return <div>
        <div style={{
        height: 2000,
        width: 300
      }}>
          <p>There is a chart here; scroll down</p>
        </div>
        <div style={{
        height: 250,
        width: 300
      }}>
          <button type="button" onClick={() => setRandomUnusedState(v => !v)}>
            set random unused state
          </button>
          <ResponsiveContainer>
            <LineChart data={d1} style={{
            border: '1px solid black'
          }}>
              <Tooltip {...args} />
              <Line dataKey="Triggers" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs)
  }
}`,...(Le=(ke=B.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var De,Be,Ie;I.parameters={...I.parameters,docs:{...(De=I.parameters)==null?void 0:De.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [, setRandomUnusedState] = useState(true);
    return <div>
        <div style={{
        height: 2000,
        width: 300
      }}>
          <p>There is a chart here; scroll down</p>
        </div>
        <div style={{
        height: 250,
        width: 300
      }}>
          <button type="button" onClick={() => setRandomUnusedState(v => !v)}>
            set random unused state
          </button>
          <ResponsiveContainer>
            <BarChart data={d1} style={{
            border: '1px solid black'
          }}>
              <Bar dataKey="Triggers" />
              <Tooltip {...args} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    shared: false
  }
}`,...(Ie=(Be=I.parameters)==null?void 0:Be.docs)==null?void 0:Ie.source}}};var Oe,Fe,je;O.parameters={...O.parameters,docs:{...(Oe=O.parameters)==null?void 0:Oe.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <div style={{
      display: 'grid',
      gridTemplateColumns: 'auto 1fr'
    }}>
        <div style={{
        width: '200px'
      }} />
        <div style={{
        position: 'relative'
      }}>
          <BarChart width={730} height={250} data={pageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip {...args} />
            <Legend />
            <Bar dataKey="pv" fill="#8884d8" />
            <Bar dataKey="uv" fill="#82ca9d" />
          </BarChart>
        </div>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    cursor: false
  }
}`,...(je=(Fe=O.parameters)==null?void 0:Fe.docs)==null?void 0:je.source}}};var He,Me,We;F.parameters={...F.parameters,docs:{...(He=F.parameters)==null?void 0:He.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={pageData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Line dataKey="uv" />
          <Tooltip {...args} />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    offset: -50,
    wrapperStyle: {
      width: 100
    }
  }
}`,...(We=(Me=F.parameters)==null?void 0:Me.docs)==null?void 0:We.source}}};const fa=["ActiveTooltip","SettingTooltipIndex","LockedByClick","CssScaledParent","SeparateDataSetsForChart","TriggerTooltipByClick","CustomContentExample","LargeDataArray","IncludeHidden","SharedTooltipInBarChart","SharedTooltipInRadialBarChart","TallTooltipInNarrowChart","TooltipWithPortal","RechartsAlphaTooltipBug5516Repro","RechartsAlphaTooltipBug5516ReproButWithItemBasedTooltip","RechartsTooltipBug5542Repro","TooltipWithNegativeOffset"];export{C as ActiveTooltip,w as CssScaledParent,x as CustomContentExample,R as IncludeHidden,K as LargeDataArray,A as LockedByClick,B as RechartsAlphaTooltipBug5516Repro,I as RechartsAlphaTooltipBug5516ReproButWithItemBasedTooltip,O as RechartsTooltipBug5542Repro,b as SeparateDataSetsForChart,E as SettingTooltipIndex,k as SharedTooltipInBarChart,L as SharedTooltipInRadialBarChart,f as TallTooltipInNarrowChart,F as TooltipWithNegativeOffset,D as TooltipWithPortal,S as TriggerTooltipByClick,fa as __namedExportsOrder,va as default};
