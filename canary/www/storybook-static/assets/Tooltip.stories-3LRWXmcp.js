import{r as g,R as e}from"./iframe-DP6zAp54.js";import"./index-XgfMJOXy.js";import{g as c}from"./utils-ePvtT4un.js";import{T as i}from"./TooltipArgs-Df-PoQrY.js";import{T as l,D as Je}from"./Tooltip-aHvmiEwK.js";import{R as p}from"./zIndexSlice-CdFbAgG_.js";import{C as y}from"./ComposedChart-Djbyfnt-.js";import{p as m}from"./Page-Cj8EiXz7.js";import{X as v}from"./XAxis-wrPg27KZ.js";import{Y as f}from"./YAxis-CRTIqg01.js";import{L as s}from"./Line-CatZrMVF.js";import{B as u}from"./Bar-D3Ep8y64.js";import{L as j}from"./LineChart-DXRaXVmu.js";import{B as X}from"./BarChart-fRhdYJqC.js";import{C as qe}from"./CartesianGrid-BlFAaOVn.js";import{L as Qe}from"./Legend-dg9X3PkL.js";import{A as et}from"./Area-CRKvfa16.js";import{R as tt}from"./RadialBarChart-CjZxTHEc.js";import{R as P}from"./RadialBar-Dj5ZYb_w.js";import"./preload-helper-Dp1pzeXC.js";import"./index-CYR3TkYm.js";import"./resolveDefaultProps-CSMJ250z.js";import"./get-CjriyByo.js";import"./ZIndexLayer-DcCIRQcN.js";import"./throttle-D7lh8v3-.js";import"./useAnimationId-EekDlSpG.js";import"./useElementOffset-CL3Lm6d5.js";import"./uniqBy-BNdjw3X0.js";import"./iteratee-BHwSZVIk.js";import"./isArguments-yB-y1yaH.js";import"./isBuffer-AZzsDYE7.js";import"./RechartsWrapper-DOH9cWj9.js";import"./axisSelectors-Rm4q15PI.js";import"./polarAxisSelectors-DrRxC45o.js";import"./PolarUtils-CTnnDHZv.js";import"./diverging-Ct01c8MP.js";import"./index-DFp-_Wbz.js";import"./index-yomVPEkO.js";import"./renderedTicksSlice-BhuX61Ra.js";import"./index-BfoEz1rZ.js";import"./fillDefinitions-BqFRhPDs.js";import"./types-DNQC58zt.js";import"./Curve-DQP2JLjt.js";import"./step-DvtT47Gl.js";import"./path-BBMZd4YL.js";import"./Cross-B1K9Yltn.js";import"./Rectangle-Cg7APWAF.js";import"./util-Dxo8gN5i.js";import"./Sector-0McMm1EY.js";import"./CartesianChart-DMNhl37Y.js";import"./chartDataContext-Dgk8EHkE.js";import"./CategoricalChart-C4A4gzgw.js";import"./CartesianAxis-BW9v8-VT.js";import"./Layer-44h3-wN_.js";import"./Text-DGNAB76g.js";import"./Label-DIQKMqhX.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./getRadiusAndStrokeWidthFromDot-DHwNW-IB.js";import"./dataEntryStyles-DojbuA9r.js";import"./ActivePoints-C-GzPRnQ.js";import"./Dot-P3TO-0hC.js";import"./activeStyles-B0VCWO8T.js";import"./Symbols-D-J-NUlP.js";import"./symbol-CoNKi1UW.js";import"./ErrorBarContext-CmnSonHd.js";import"./SetGraphicalItem-CNROvnrS.js";import"./ActiveShapeUtils-DYM7TwK-.js";import"./useEffectiveDataKey-DdiUIHde.js";import"./tiny-invariant-CopsF_GD.js";import"./tooltipContext-DK0-RXb9.js";import"./getZIndexFromUnknown-DNrX2x-5.js";import"./omit-3dXj1SBX.js";import"./PolarChart-BlwvOlWo.js";import"./polarScaleSelectors-DYpCYDW7.js";import"./polarSelectors-DKKeZqG2.js";function*at(t){let n=t;for(n>0&&n<1&&(n=Math.round(n*1e3));n<0;)n+=65537;for(;;)n=(75*n+74)%65537,yield Math.round(n)}function Y(t,r,a){return t.next().value%(a-r)+r}function rt(t,r){const a=[],o=at(r);for(let n=0;n<t;n++)a.push({label:`Iter: ${n}`,x:Y(o,100,300),y:Y(o,400,800),z:Y(o,1e3,2e3)});return a}g.createContext(null);e.memo(function({onClick:r,onMouseMove:a,onMouseLeave:o,onMouseDown:n,onMouseUp:h,onMouseEnter:d,pointerEvents:Ne="none",fill:Ge="transparent",cursor:Ve}){return e.createElement(e.Fragment,null,e.createElement("rect",{x:0,y:0,width:"100%",height:"100%",fill:Ge,style:{pointerEvents:Ne,cursor:Ve},onClick:r,onMouseMove:a,onMouseLeave:o,onMouseDown:n,onMouseUp:h,onMouseEnter:d}))});const{expect:E,fireEvent:_,userEvent:nt,waitFor:C,within:ot}=__STORYBOOK_MODULE_TEST__,Ba={argTypes:i,component:l},Z={render:t=>e.createElement(p,{width:"100%",height:400},e.createElement(y,{data:m},e.createElement(v,{dataKey:"name"}),e.createElement(f,null),e.createElement(l,{...t}),e.createElement(s,{dataKey:"uv"})))},w={...Z,args:{...c(i),active:!0}},b={render:t=>e.createElement(j,{width:500,height:300,data:m,accessibilityLayer:!0,margin:{top:5,right:5,bottom:5,left:0}},e.createElement(qe,{stroke:"#eee",strokeDasharray:"5 5"}),e.createElement(v,{dataKey:"name"}),e.createElement(f,null),e.createElement(l,{...t}),e.createElement(s,{type:"monotone",dataKey:"uv",stroke:"#8884d8"}),e.createElement(s,{type:"monotone",dataKey:"pv",stroke:"#82ca9d"})),args:{...c(i),defaultIndex:2}},S={render:t=>{const[r,a]=e.useState(!1),[o,n]=e.useState({}),h=d=>(!r&&d.payload&&d.payload.length>0&&d.coordinate.x!==o.x&&n({payload:d.payload,x:d.coordinate.x,label:d.label}),e.createElement(Je,{...d,payload:d.tooltipData.payload??d.payload,label:d.tooltipData.label??d.label}));return e.createElement(p,{width:"100%",height:500},e.createElement(y,{data:m,onClick:()=>{a(!r)}},e.createElement(l,{...t,position:{y:0,x:o.x},content:e.createElement(h,{tooltipData:o})}),e.createElement(s,{dataKey:"uv"}),e.createElement(u,{dataKey:"pv"})))},description:"This example shows how to lock the tooltip to a specific position. Click on the chart to show fix the Tooltip.",args:{...c(i)}},A={render:t=>{const[r,a]=g.useState(1.2),o=g.useCallback(()=>a(h=>h+.1),[]),n=g.useCallback(()=>a(h=>h-.1),[]);return e.createElement("div",{style:{width:"100%"}},e.createElement("h2",null,"No transform: scale"),e.createElement("div",{style:{display:"flex"}},e.createElement(p,{width:"100%",height:200},e.createElement(y,{data:m},e.createElement(v,{dataKey:"name"}),e.createElement(l,null),e.createElement(s,{dataKey:"uv"}),e.createElement(u,{dataKey:"pv"})))),e.createElement("h2",null,"Parent container",` <div style={{transform: scale(${r})}}> ...`),e.createElement("button",{type:"button",onClick:o},"Zoom In"),e.createElement("button",{type:"button",onClick:n},"Zoom Out"),e.createElement("div",{style:{transform:`scale(${r})`,transformOrigin:"50% 0"}},e.createElement(p,{width:"100%",height:200},e.createElement(y,{data:m},e.createElement(v,{dataKey:"name"}),e.createElement(s,{dataKey:"uv"}),e.createElement(u,{dataKey:"pv"}),e.createElement(l,{...t})))))},description:"This example shows if Tooltip is shown correctly when parent component use transform:scale styling",args:{...c(i)}},st=[{category:"A",value:.2},{category:"B",value:.3},{category:"C",value:.5},{category:"D",value:.6},{category:"E",value:.7},{category:"F",value:.4}],it=[{category:"A",value:null},{category:"B",value:null},{category:"C",value:null},{category:"D",value:.2},{category:"E",value:.4},{category:"F",value:.6}],x={render:t=>e.createElement(p,{width:"100%",height:500},e.createElement(y,{data:st},e.createElement(v,{dataKey:"category",type:"category",allowDuplicatedCategory:!1}),e.createElement(f,{dataKey:"value"}),e.createElement(l,{...t}),e.createElement(et,{dataKey:"value"}),e.createElement(s,{dataKey:"value",data:it}))),args:{...c(i)}},K={...Z,args:{...c(i),trigger:"click"}},lt=({active:t,payload:r})=>e.createElement("div",{style:{backgroundColor:"#5b63ffe7",padding:"10px",borderRadius:"10px",boxShadow:"1px 2px 10px -2px #7873ffb1",visibility:t?"visible":"hidden"}},r==null?void 0:r.map(a=>e.createElement("p",{key:a.name,style:{borderStyle:"solid 1px",fontSize:"13px",fontWeight:"600",fontFamily:"sans-serif",color:"#fff"}},`${a.name} : ${a.value}`))),k={...Z,args:{...c(i),content:e.createElement(lt,null),trigger:"hover"}},R={render:t=>{const[r,a]=[600,300];return e.createElement(p,{width:"100%",height:a},e.createElement(y,{width:r,height:a,margin:{top:20,right:20,bottom:20,left:20},data:rt(1e3,334058656)},e.createElement(l,{...t}),e.createElement(s,{dataKey:"x"}),e.createElement(s,{dataKey:"y"}),e.createElement(s,{dataKey:"z"})))},args:{...c(i)}},B={render:t=>{const[r,a]=[600,300];return e.createElement(p,{width:"100%",height:a},e.createElement(y,{width:r,height:a,margin:{top:20,right:20,bottom:20,left:20},data:m},e.createElement(l,{...t}),e.createElement(s,{dataKey:"uv"}),e.createElement(s,{dataKey:"pv",hide:!0})))},args:{...c(i),includeHidden:!0}},L={render:t=>e.createElement(p,{width:"100%",height:400},e.createElement(X,{data:m},e.createElement(u,{dataKey:"uv",fill:"green"}),e.createElement(u,{dataKey:"pv",fill:"red"}),e.createElement(l,{...t}))),args:{...c(i),shared:!1,defaultIndex:2,active:!0}},D={render:t=>e.createElement(p,{width:"100%",height:400},e.createElement(tt,{data:m},e.createElement(P,{dataKey:"uv",fill:"green"}),e.createElement(P,{dataKey:"pv",fill:"red"}),e.createElement(l,{...t}))),args:{...c(i),shared:!1,defaultIndex:2,active:!0}},T={render:t=>e.createElement(j,{width:"100%",height:50,responsive:!0,data:m},e.createElement(l,{...t}),e.createElement(s,{dataKey:"uv",fill:"green"}),e.createElement(s,{dataKey:"pv",fill:"red"}),e.createElement(s,{dataKey:"amt",fill:"amt"})),args:{...c(i),defaultIndex:2,active:!0}},I={render:t=>{const[r,a]=g.useState(null);return e.createElement(e.Fragment,null,e.createElement(p,{width:"100%",height:400},e.createElement(j,{data:m},r&&e.createElement(l,{...t,portal:r}),e.createElement(s,{dataKey:"uv",fill:"green"}),e.createElement(s,{dataKey:"pv",fill:"red"}))),e.createElement("div",{ref:o=>{r==null&&o!=null&&a(o)}},e.createElement("p",null,"Inspect the resulting HTML to see that the Tooltip element is rendered according to the portal ref."),e.createElement("p",null,"You now control the container the Tooltip renders in, as well as style attributes such as width, height, etc. Those can be managed via the Tooltip wrapperStyle prop.")))},args:{...c(i),wrapperStyle:{width:"25%",marginLeft:10},defaultIndex:3,active:!0}},ze=[{Triggers:10,date:"Jan 1, 2025"},{Triggers:10,date:"Feb 28, 2025"}],O={render:t=>{const[,r]=g.useState(!0);return e.createElement("div",null,e.createElement("div",{style:{height:2e3,width:300}},e.createElement("p",null,"There is a chart here; scroll down")),e.createElement("div",{style:{height:250,width:300}},e.createElement("button",{type:"button",onClick:()=>r(a=>!a)},"set random unused state"),e.createElement(p,null,e.createElement(j,{data:ze,style:{border:"1px solid black"}},e.createElement(l,{...t}),e.createElement(s,{dataKey:"Triggers"})))))},args:{...c(i)}},F={render:t=>{const[,r]=g.useState(!0);return e.createElement("div",null,e.createElement("div",{style:{height:2e3,width:300}},e.createElement("p",null,"There is a chart here; scroll down")),e.createElement("div",{style:{height:250,width:300}},e.createElement("button",{type:"button",onClick:()=>r(a=>!a)},"set random unused state"),e.createElement(p,null,e.createElement(X,{data:ze,style:{border:"1px solid black"}},e.createElement(u,{dataKey:"Triggers"}),e.createElement(l,{...t})))))},args:{...c(i),shared:!1}},H={render:t=>e.createElement("div",{style:{display:"grid",gridTemplateColumns:"auto 1fr"}},e.createElement("div",{style:{width:"200px"}}),e.createElement("div",{style:{position:"relative"}},e.createElement(X,{width:730,height:250,data:m},e.createElement(qe,{strokeDasharray:"3 3"}),e.createElement(v,{dataKey:"name"}),e.createElement(f,null),e.createElement(l,{...t}),e.createElement(Qe,null),e.createElement(u,{dataKey:"pv",fill:"#8884d8"}),e.createElement(u,{dataKey:"uv",fill:"#82ca9d"})))),args:{...c(i),cursor:!1}},M={render:t=>e.createElement(p,{width:"100%",height:400},e.createElement(y,{data:m},e.createElement(v,{dataKey:"name"}),e.createElement(f,null),e.createElement(s,{dataKey:"uv"}),e.createElement(l,{...t}))),args:{...c(i),offset:-50,wrapperStyle:{width:100}}},W={render:t=>{const[r,a]=g.useState(800);return e.createElement("div",null,e.createElement("p",null,'Hover the last bar, move the mouse out of the chart, then click "Shrink". The scroll container must not get a horizontal scrollbar. See https://github.com/recharts/recharts/issues/8263'),e.createElement("button",{type:"button",onClick:()=>a(300)},"Shrink"),e.createElement("button",{type:"button",onClick:()=>a(800)},"Grow"),e.createElement("div",{"data-testid":"scroll-container",style:{width:r,overflowX:"auto",border:"1px solid black"}},e.createElement(X,{responsive:!0,width:"100%",height:300,data:m},e.createElement(v,{dataKey:"name"}),e.createElement(f,null),e.createElement(l,{...t}),e.createElement(u,{dataKey:"uv",fill:"#8884d8"}))))},args:{...c(i),isAnimationActive:!1},play:async({canvasElement:t})=>{const r=ot(t),a=r.getByTestId("scroll-container"),o=a.querySelector(".recharts-wrapper"),n=a.querySelector(".recharts-tooltip-wrapper");if(!(o instanceof HTMLElement)||!(n instanceof HTMLElement))throw new Error("Chart did not render");const h=o.getBoundingClientRect();_.mouseMove(o,{clientX:h.right-10,clientY:h.top+h.height/2}),await C(()=>E(n).toBeVisible()),_.mouseOut(o,{relatedTarget:t}),await C(()=>E(n).not.toBeVisible()),await nt.click(r.getByRole("button",{name:"Shrink"})),await C(()=>E(o.getBoundingClientRect().width).toBeLessThan(h.width)),await C(()=>E(a.scrollWidth).toBe(a.clientWidth))}},La=["ActiveTooltip","SettingTooltipIndex","LockedByClick","CssScaledParent","SeparateDataSetsForChart","TriggerTooltipByClick","CustomContentExample","LargeDataArray","IncludeHidden","SharedTooltipInBarChart","SharedTooltipInRadialBarChart","TallTooltipInNarrowChart","TooltipWithPortal","RechartsAlphaTooltipBug5516Repro","RechartsAlphaTooltipBug5516ReproButWithItemBasedTooltip","RechartsTooltipBug5542Repro","TooltipWithNegativeOffset","TooltipStaleCoordinateAfterShrinkBug8263Repro"];var U,$,q;w.parameters={...w.parameters,docs:{...(U=w.parameters)==null?void 0:U.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    active: true
  }
}`,...(q=($=w.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var z,N,G;b.parameters={...b.parameters,docs:{...(z=b.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(G=(N=b.parameters)==null?void 0:N.docs)==null?void 0:G.source}}};var V,J,Q;S.parameters={...S.parameters,docs:{...(V=S.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(Q=(J=S.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var ee,te,ae;A.parameters={...A.parameters,docs:{...(ee=A.parameters)==null?void 0:ee.docs,source:{originalSource:`{
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
}`,...(ae=(te=A.parameters)==null?void 0:te.docs)==null?void 0:ae.source}}};var re,ne,oe;x.parameters={...x.parameters,docs:{...(re=x.parameters)==null?void 0:re.docs,source:{originalSource:`{
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
}`,...(oe=(ne=x.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};var se,ie,le;K.parameters={...K.parameters,docs:{...(se=K.parameters)==null?void 0:se.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    trigger: 'click'
  }
}`,...(le=(ie=K.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var ce,de,pe;k.parameters={...k.parameters,docs:{...(ce=k.parameters)==null?void 0:ce.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    content: <CustomContent />,
    trigger: 'hover'
  }
}`,...(pe=(de=k.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var me,he,ue;R.parameters={...R.parameters,docs:{...(me=R.parameters)==null?void 0:me.docs,source:{originalSource:`{
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
}`,...(ue=(he=R.parameters)==null?void 0:he.docs)==null?void 0:ue.source}}};var ge,ye,ve;B.parameters={...B.parameters,docs:{...(ge=B.parameters)==null?void 0:ge.docs,source:{originalSource:`{
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
}`,...(ve=(ye=B.parameters)==null?void 0:ye.docs)==null?void 0:ve.source}}};var fe,Te,Ee;L.parameters={...L.parameters,docs:{...(fe=L.parameters)==null?void 0:fe.docs,source:{originalSource:`{
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
}`,...(Ee=(Te=L.parameters)==null?void 0:Te.docs)==null?void 0:Ee.source}}};var Ce,we,be;D.parameters={...D.parameters,docs:{...(Ce=D.parameters)==null?void 0:Ce.docs,source:{originalSource:`{
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
}`,...(be=(we=D.parameters)==null?void 0:we.docs)==null?void 0:be.source}}};var Se,Ae,xe,Ke,ke;T.parameters={...T.parameters,docs:{...(Se=T.parameters)==null?void 0:Se.docs,source:{originalSource:`{
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
}`,...(xe=(Ae=T.parameters)==null?void 0:Ae.docs)==null?void 0:xe.source},description:{story:`https://github.com/recharts/recharts/issues/2458

Tooltip that's taller than the chart itself should not clip.
It should instead overflow the chart.`,...(ke=(Ke=T.parameters)==null?void 0:Ke.docs)==null?void 0:ke.description}}};var Re,Be,Le;I.parameters={...I.parameters,docs:{...(Re=I.parameters)==null?void 0:Re.docs,source:{originalSource:`{
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
}`,...(Le=(Be=I.parameters)==null?void 0:Be.docs)==null?void 0:Le.source}}};var De,Ie,Oe;O.parameters={...O.parameters,docs:{...(De=O.parameters)==null?void 0:De.docs,source:{originalSource:`{
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
}`,...(Oe=(Ie=O.parameters)==null?void 0:Ie.docs)==null?void 0:Oe.source}}};var Fe,He,Me;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`{
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
}`,...(Me=(He=F.parameters)==null?void 0:He.docs)==null?void 0:Me.source}}};var We,je,Xe;H.parameters={...H.parameters,docs:{...(We=H.parameters)==null?void 0:We.docs,source:{originalSource:`{
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
}`,...(Xe=(je=H.parameters)==null?void 0:je.docs)==null?void 0:Xe.source}}};var Ye,Ze,Pe;M.parameters={...M.parameters,docs:{...(Ye=M.parameters)==null?void 0:Ye.docs,source:{originalSource:`{
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
}`,...(Pe=(Ze=M.parameters)==null?void 0:Ze.docs)==null?void 0:Pe.source}}};var _e,Ue,$e;W.parameters={...W.parameters,docs:{...(_e=W.parameters)==null?void 0:_e.docs,source:{originalSource:`{
  render: (args: Args) => {
    const [width, setWidth] = useState(800);
    return <div>
        <p>
          Hover the last bar, move the mouse out of the chart, then click &quot;Shrink&quot;. The scroll container must
          not get a horizontal scrollbar. See https://github.com/recharts/recharts/issues/8263
        </p>
        <button type="button" onClick={() => setWidth(300)}>
          Shrink
        </button>
        <button type="button" onClick={() => setWidth(800)}>
          Grow
        </button>
        <div data-testid="scroll-container" style={{
        width,
        overflowX: 'auto',
        border: '1px solid black'
      }}>
          <BarChart responsive width="100%" height={300} data={pageData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip {...args} />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </div>
      </div>;
  },
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    isAnimationActive: false
  },
  play: async ({
    canvasElement
  }: {
    canvasElement: HTMLElement;
  }) => {
    const canvas = within(canvasElement);
    const scrollContainer = canvas.getByTestId('scroll-container');
    const wrapper = scrollContainer.querySelector('.recharts-wrapper');
    const tooltip = scrollContainer.querySelector('.recharts-tooltip-wrapper');
    if (!(wrapper instanceof HTMLElement) || !(tooltip instanceof HTMLElement)) {
      throw new Error('Chart did not render');
    }
    const rect = wrapper.getBoundingClientRect();
    fireEvent.mouseMove(wrapper, {
      clientX: rect.right - 10,
      clientY: rect.top + rect.height / 2
    });
    await waitFor(() => expect(tooltip).toBeVisible());
    fireEvent.mouseOut(wrapper, {
      relatedTarget: canvasElement
    });
    await waitFor(() => expect(tooltip).not.toBeVisible());
    await userEvent.click(canvas.getByRole('button', {
      name: 'Shrink'
    }));
    await waitFor(() => expect(wrapper.getBoundingClientRect().width).toBeLessThan(rect.width));
    await waitFor(() => expect(scrollContainer.scrollWidth).toBe(scrollContainer.clientWidth));
  }
}`,...($e=(Ue=W.parameters)==null?void 0:Ue.docs)==null?void 0:$e.source}}};export{w as ActiveTooltip,A as CssScaledParent,k as CustomContentExample,B as IncludeHidden,R as LargeDataArray,S as LockedByClick,O as RechartsAlphaTooltipBug5516Repro,F as RechartsAlphaTooltipBug5516ReproButWithItemBasedTooltip,H as RechartsTooltipBug5542Repro,x as SeparateDataSetsForChart,b as SettingTooltipIndex,L as SharedTooltipInBarChart,D as SharedTooltipInRadialBarChart,T as TallTooltipInNarrowChart,W as TooltipStaleCoordinateAfterShrinkBug8263Repro,M as TooltipWithNegativeOffset,I as TooltipWithPortal,K as TriggerTooltipByClick,La as __namedExportsOrder,Ba as default};
