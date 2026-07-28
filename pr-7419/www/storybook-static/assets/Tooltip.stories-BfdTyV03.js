import{i as e,s as t}from"./preload-helper-BdFrVu1K.js";import{t as n}from"./react-43m7EBoo.js";import{t as r}from"./react-dom-BP7XFmny.js";import{A as i,B as a,Dn as o,J as ee,O as s,Q as te,R as c,Rt as l,Vn as u,W as d,X as f,f as ne,kn as re,t as ie,u as p,ut as ae}from"./iframe-BiMB5Acc.js";import{t as oe}from"./data-J2vpPkF6.js";import{r as m}from"./Page-C0w_0_Yr.js";import{n as se,t as h}from"./utils-4uF5A2JM.js";import{n as ce,t as g}from"./TooltipArgs-CYl_k2fd.js";function*le(e){let t=2**16+1,n=e;for(n>0&&n<1&&(n=Math.round(n*1e3));n<0;)n+=t;for(;;)n=(75*n+74)%t,yield Math.round(n)}function _(e,t,n){return e.next().value%(n-t)+t}var ue=e((()=>{}));function de(e,t){let n=[],r=le(t);for(let t=0;t<e;t++)n.push({label:`Iter: ${t}`,x:_(r,100,300),y:_(r,400,800),z:_(r,1e3,2e3)});return n}var fe=e((()=>{ue()})),v=e((()=>{n()})),pe=e((()=>{n(),v()})),y=e((()=>{n()})),b=e((()=>{n()})),x=e((()=>{n(),b()})),me=e((()=>{n(),y(),x()})),he=e((()=>{n(),y(),x(),v()})),ge=e((()=>{n(),y(),x(),v()})),S=e((()=>{n(),b()})),_e=e((()=>{n(),S(),v()})),ve=e((()=>{n(),S(),v()})),ye=e((()=>{n(),S(),v()})),be=e((()=>{n(),b(),v()})),xe=e((()=>{n()})),Se,C=e((()=>{Se=t(n(),1),(0,Se.createContext)(null)})),w=e((()=>{n()})),T=e((()=>{n()})),E,D=e((()=>{E=t(n(),1),E.memo(function({onClick:e,onMouseMove:t,onMouseLeave:n,onMouseDown:r,onMouseUp:i,onMouseEnter:a,pointerEvents:o=`none`,fill:ee=`transparent`,cursor:s}){return E.createElement(E.Fragment,null,E.createElement(`rect`,{x:0,y:0,width:`100%`,height:`100%`,fill:ee,style:{pointerEvents:o,cursor:s},onClick:e,onMouseMove:t,onMouseLeave:n,onMouseDown:r,onMouseUp:i,onMouseEnter:a}))})})),O=e((()=>{n()})),k=e((()=>{n()})),A=e((()=>{n()})),j=e((()=>{n()})),Ce=e((()=>{n()})),we=e((()=>{n()})),Te=e((()=>{n()})),Ee=e((()=>{n(),D(),O(),k(),A(),j(),Ce(),we(),Te(),T()})),De,Oe=e((()=>{n(),De={padding:`4px 8px`,fontSize:`11px`,cursor:`pointer`,border:`1px solid #ccc`,borderRadius:`3px`,background:`#fff`},{...De}})),ke=e((()=>{w(),T(),D(),O(),k(),A(),j(),Ce(),we(),Te(),Ee(),Oe()})),Ae=e((()=>{n(),r(),C(),ke()})),je=e((()=>{n(),S(),v()})),Me=e((()=>{n(),S(),v()})),Ne=e((()=>{n(),v(),b()})),Pe=e((()=>{n(),v(),x()})),Fe=e((()=>{n(),r(),pe(),me(),he(),ge(),_e(),ve(),ye(),be(),xe(),C(),Ae(),je(),Me(),Ne(),Pe()})),Ie=e((()=>{n()})),Le=e((()=>{fe(),Fe(),Ae(),C(),w(),Ie(),xe()})),M,Re,N,P,F,I,L,ze,Be,R,z,B,V,H,U,W,G,K,q,J,Y,X,Z,Q,$;e((()=>{M=t(n()),Le(),oe(),ie(),se(),ce(),Re={argTypes:g,component:l},N={render:e=>M.createElement(u,{width:`100%`,height:400},M.createElement(p,{data:m},M.createElement(a,{dataKey:`name`}),M.createElement(c,null),M.createElement(l,e),M.createElement(f,{dataKey:`uv`})))},P={...N,args:{...h(g),active:!0}},F={render:e=>M.createElement(i,{width:500,height:300,data:m,accessibilityLayer:!0,margin:{top:5,right:5,bottom:5,left:0}},M.createElement(te,{stroke:`#eee`,strokeDasharray:`5 5`}),M.createElement(a,{dataKey:`name`}),M.createElement(c,null),M.createElement(l,e),M.createElement(f,{type:`monotone`,dataKey:`uv`,stroke:`#8884d8`}),M.createElement(f,{type:`monotone`,dataKey:`pv`,stroke:`#82ca9d`})),args:{...h(g),defaultIndex:2}},I={render:e=>{let[t,n]=M.useState(!1),[r,i]=M.useState({}),a=e=>(!t&&e.payload&&e.payload.length>0&&e.coordinate.x!==r.x&&i({payload:e.payload,x:e.coordinate.x,label:e.label}),M.createElement(o,{...e,payload:e.tooltipData.payload??e.payload,label:e.tooltipData.label??e.label}));return M.createElement(u,{width:`100%`,height:500},M.createElement(p,{data:m,onClick:()=>{n(!t)}},M.createElement(l,{...e,position:{y:0,x:r.x},content:M.createElement(a,{tooltipData:r})}),M.createElement(f,{dataKey:`uv`}),M.createElement(d,{dataKey:`pv`})))},description:`This example shows how to lock the tooltip to a specific position. Click on the chart to show fix the Tooltip.`,args:{...h(g)}},L={render:e=>{let[t,n]=(0,M.useState)(1.2),r=(0,M.useCallback)(()=>n(e=>e+.1),[]),i=(0,M.useCallback)(()=>n(e=>e-.1),[]);return M.createElement(`div`,{style:{width:`100%`}},M.createElement(`h2`,null,`No transform: scale`),M.createElement(`div`,{style:{display:`flex`}},M.createElement(u,{width:`100%`,height:200},M.createElement(p,{data:m},M.createElement(a,{dataKey:`name`}),M.createElement(l,null),M.createElement(f,{dataKey:`uv`}),M.createElement(d,{dataKey:`pv`})))),M.createElement(`h2`,null,`Parent container`,` <div style={{transform: scale(${t})}}> ...`),M.createElement(`button`,{type:`button`,onClick:r},`Zoom In`),M.createElement(`button`,{type:`button`,onClick:i},`Zoom Out`),M.createElement(`div`,{style:{transform:`scale(${t})`,transformOrigin:`50% 0`}},M.createElement(u,{width:`100%`,height:200},M.createElement(p,{data:m},M.createElement(a,{dataKey:`name`}),M.createElement(f,{dataKey:`uv`}),M.createElement(d,{dataKey:`pv`}),M.createElement(l,e)))))},description:`This example shows if Tooltip is shown correctly when parent component use transform:scale styling`,args:{...h(g)}},ze=[{category:`A`,value:.2},{category:`B`,value:.3},{category:`C`,value:.5},{category:`D`,value:.6},{category:`E`,value:.7},{category:`F`,value:.4}],Be=[{category:`A`,value:null},{category:`B`,value:null},{category:`C`,value:null},{category:`D`,value:.2},{category:`E`,value:.4},{category:`F`,value:.6}],R={render:e=>M.createElement(u,{width:`100%`,height:500},M.createElement(p,{data:ze},M.createElement(a,{dataKey:`category`,type:`category`,allowDuplicatedCategory:!1}),M.createElement(c,{dataKey:`value`}),M.createElement(l,e),M.createElement(ee,{dataKey:`value`}),M.createElement(f,{dataKey:`value`,data:Be}))),args:{...h(g)}},z={...N,args:{...h(g),trigger:`click`}},B=({active:e,payload:t})=>M.createElement(`div`,{style:{backgroundColor:`#5b63ffe7`,padding:`10px`,borderRadius:`10px`,boxShadow:`1px 2px 10px -2px #7873ffb1`,visibility:e?`visible`:`hidden`}},t?.map(e=>M.createElement(`p`,{key:e.name,style:{borderStyle:`solid 1px`,fontSize:`13px`,fontWeight:`600`,fontFamily:`sans-serif`,color:`#fff`}},`${e.name} : ${e.value}`))),V={...N,args:{...h(g),content:M.createElement(B,null),trigger:`hover`}},H={render:e=>{let[t,n]=[600,300];return M.createElement(u,{width:`100%`,height:n},M.createElement(p,{width:t,height:n,margin:{top:20,right:20,bottom:20,left:20},data:de(1e3,334058656)},M.createElement(l,e),M.createElement(f,{dataKey:`x`}),M.createElement(f,{dataKey:`y`}),M.createElement(f,{dataKey:`z`})))},args:{...h(g)}},U={render:e=>{let[t,n]=[600,300];return M.createElement(u,{width:`100%`,height:n},M.createElement(p,{width:t,height:n,margin:{top:20,right:20,bottom:20,left:20},data:m},M.createElement(l,e),M.createElement(f,{dataKey:`uv`}),M.createElement(f,{dataKey:`pv`,hide:!0})))},args:{...h(g),includeHidden:!0}},W={render:e=>M.createElement(u,{width:`100%`,height:400},M.createElement(s,{data:m},M.createElement(d,{dataKey:`uv`,fill:`green`}),M.createElement(d,{dataKey:`pv`,fill:`red`}),M.createElement(l,e))),args:{...h(g),shared:!1,defaultIndex:2,active:!0}},G={render:e=>M.createElement(u,{width:`100%`,height:400},M.createElement(ne,{data:m},M.createElement(ae,{dataKey:`uv`,fill:`green`}),M.createElement(ae,{dataKey:`pv`,fill:`red`}),M.createElement(l,e))),args:{...h(g),shared:!1,defaultIndex:2,active:!0}},K={render:e=>M.createElement(i,{width:`100%`,height:50,responsive:!0,data:m},M.createElement(l,e),M.createElement(f,{dataKey:`uv`,fill:`green`}),M.createElement(f,{dataKey:`pv`,fill:`red`}),M.createElement(f,{dataKey:`amt`,fill:`amt`})),args:{...h(g),defaultIndex:2,active:!0}},q={render:e=>{let[t,n]=(0,M.useState)(null);return M.createElement(M.Fragment,null,M.createElement(u,{width:`100%`,height:400},M.createElement(i,{data:m},t&&M.createElement(l,{...e,portal:t}),M.createElement(f,{dataKey:`uv`,fill:`green`}),M.createElement(f,{dataKey:`pv`,fill:`red`}))),M.createElement(`div`,{ref:e=>{t==null&&e!=null&&n(e)}},M.createElement(`p`,null,`Inspect the resulting HTML to see that the Tooltip element is rendered according to the portal ref.`),M.createElement(`p`,null,`You now control the container the Tooltip renders in, as well as style attributes such as width, height, etc. Those can be managed via the Tooltip wrapperStyle prop.`)))},args:{...h(g),wrapperStyle:{width:`25%`,marginLeft:10},defaultIndex:3,active:!0}},J=[{Triggers:10,date:`Jan 1, 2025`},{Triggers:10,date:`Feb 28, 2025`}],Y={render:e=>{let[,t]=(0,M.useState)(!0);return M.createElement(`div`,null,M.createElement(`div`,{style:{height:2e3,width:300}},M.createElement(`p`,null,`There is a chart here; scroll down`)),M.createElement(`div`,{style:{height:250,width:300}},M.createElement(`button`,{type:`button`,onClick:()=>t(e=>!e)},`set random unused state`),M.createElement(u,null,M.createElement(i,{data:J,style:{border:`1px solid black`}},M.createElement(l,e),M.createElement(f,{dataKey:`Triggers`})))))},args:{...h(g)}},X={render:e=>{let[,t]=(0,M.useState)(!0);return M.createElement(`div`,null,M.createElement(`div`,{style:{height:2e3,width:300}},M.createElement(`p`,null,`There is a chart here; scroll down`)),M.createElement(`div`,{style:{height:250,width:300}},M.createElement(`button`,{type:`button`,onClick:()=>t(e=>!e)},`set random unused state`),M.createElement(u,null,M.createElement(s,{data:J,style:{border:`1px solid black`}},M.createElement(d,{dataKey:`Triggers`}),M.createElement(l,e)))))},args:{...h(g),shared:!1}},Z={render:e=>M.createElement(`div`,{style:{display:`grid`,gridTemplateColumns:`auto 1fr`}},M.createElement(`div`,{style:{width:`200px`}}),M.createElement(`div`,{style:{position:`relative`}},M.createElement(s,{width:730,height:250,data:m},M.createElement(te,{strokeDasharray:`3 3`}),M.createElement(a,{dataKey:`name`}),M.createElement(c,null),M.createElement(l,e),M.createElement(re,null),M.createElement(d,{dataKey:`pv`,fill:`#8884d8`}),M.createElement(d,{dataKey:`uv`,fill:`#82ca9d`})))),args:{...h(g),cursor:!1}},Q={render:e=>M.createElement(u,{width:`100%`,height:400},M.createElement(p,{data:m},M.createElement(a,{dataKey:`name`}),M.createElement(c,null),M.createElement(f,{dataKey:`uv`}),M.createElement(l,e))),args:{...h(g),offset:-50,wrapperStyle:{width:100}}},P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    active: true
  }
}`,...P.parameters?.docs?.source}}},F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
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
}`,...F.parameters?.docs?.source}}},I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}},L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}},R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}},z.parameters={...z.parameters,docs:{...z.parameters?.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    trigger: 'click'
  }
}`,...z.parameters?.docs?.source}}},V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  ...SimpleTooltipStory,
  args: {
    ...getStoryArgsFromArgsTypesObject(TooltipArgs),
    content: <CustomContent />,
    trigger: 'hover'
  }
}`,...V.parameters?.docs?.source}}},H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
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
}`,...H.parameters?.docs?.source}}},U.parameters={...U.parameters,docs:{...U.parameters?.docs,source:{originalSource:`{
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
}`,...U.parameters?.docs?.source}}},W.parameters={...W.parameters,docs:{...W.parameters?.docs,source:{originalSource:`{
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
}`,...W.parameters?.docs?.source}}},G.parameters={...G.parameters,docs:{...G.parameters?.docs,source:{originalSource:`{
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
}`,...G.parameters?.docs?.source}}},K.parameters={...K.parameters,docs:{...K.parameters?.docs,source:{originalSource:`{
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
}`,...K.parameters?.docs?.source},description:{story:`https://github.com/recharts/recharts/issues/2458

Tooltip that's taller than the chart itself should not clip.
It should instead overflow the chart.`,...K.parameters?.docs?.description}}},q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
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
}`,...q.parameters?.docs?.source}}},Y.parameters={...Y.parameters,docs:{...Y.parameters?.docs,source:{originalSource:`{
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
}`,...Y.parameters?.docs?.source}}},X.parameters={...X.parameters,docs:{...X.parameters?.docs,source:{originalSource:`{
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
}`,...X.parameters?.docs?.source}}},Z.parameters={...Z.parameters,docs:{...Z.parameters?.docs,source:{originalSource:`{
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
}`,...Z.parameters?.docs?.source}}},Q.parameters={...Q.parameters,docs:{...Q.parameters?.docs,source:{originalSource:`{
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
}`,...Q.parameters?.docs?.source}}},$=[`ActiveTooltip`,`SettingTooltipIndex`,`LockedByClick`,`CssScaledParent`,`SeparateDataSetsForChart`,`TriggerTooltipByClick`,`CustomContentExample`,`LargeDataArray`,`IncludeHidden`,`SharedTooltipInBarChart`,`SharedTooltipInRadialBarChart`,`TallTooltipInNarrowChart`,`TooltipWithPortal`,`RechartsAlphaTooltipBug5516Repro`,`RechartsAlphaTooltipBug5516ReproButWithItemBasedTooltip`,`RechartsTooltipBug5542Repro`,`TooltipWithNegativeOffset`]}))();export{P as ActiveTooltip,L as CssScaledParent,V as CustomContentExample,U as IncludeHidden,H as LargeDataArray,I as LockedByClick,Y as RechartsAlphaTooltipBug5516Repro,X as RechartsAlphaTooltipBug5516ReproButWithItemBasedTooltip,Z as RechartsTooltipBug5542Repro,R as SeparateDataSetsForChart,F as SettingTooltipIndex,W as SharedTooltipInBarChart,G as SharedTooltipInRadialBarChart,K as TallTooltipInNarrowChart,Q as TooltipWithNegativeOffset,q as TooltipWithPortal,z as TriggerTooltipByClick,$ as __namedExportsOrder,Re as default};