import{r as f,R as e}from"./iframe-CLMMwevR.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Cs8CAcTx.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-C07rknep.js";import{C as k}from"./ComposedChart-pYiK9Scc.js";import{X as K}from"./XAxis-DkO77iT7.js";import{L as v}from"./Legend-BqxvSdh-.js";import{B as s}from"./Bar-CJq8q7dS.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BtFWigtA.js";import"./Text-CiZ_8rvc.js";import"./resolveDefaultProps-C-YHYhRk.js";import"./DOMUtils-Cj7lsnlo.js";import"./isWellBehavedNumber-DSl6gFKS.js";import"./useBackwardsCompatibleTheme-DuadFd-n.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DMkUVhQg.js";import"./index-iZ7_9Rw4.js";import"./index-DTmItnBv.js";import"./RechartsWrapper-BZjp8UCv.js";import"./index-DXBvk1ZI.js";import"./index-fePXAV8a.js";import"./throttle--WJjmRve.js";import"./axisSelectors-Bue48vwC.js";import"./d3-scale-DOlcECPa.js";import"./renderedTicksSlice-wRkzPU5z.js";import"./CartesianAxis-DUmQAHmM.js";import"./Layer-Cu_Jods-.js";import"./types-BzNgNoqU.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-Q0nxu5Mh.js";import"./chartDataContext-CTT-NX_B.js";import"./CategoricalChart-C94CRL_w.js";import"./Symbols-U0YZNd6R.js";import"./symbol-DOolnNi0.js";import"./path-DyVhHtw_.js";import"./useElementOffset-0ZnUPhxq.js";import"./uniqBy-EzYVTFGO.js";import"./iteratee-DMZj6OWx.js";import"./AnimatedItems-BI16k_x1.js";import"./useAnimationId-B3zwLWVY.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B1yBKol3.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CIArBYiS.js";import"./tooltipContext-Dz25T291.js";import"./RegisterGraphicalItemId-DbsNOx6w.js";import"./ErrorBarContext-Bh7QEhRH.js";import"./GraphicalItemClipPath-Cx1IovYW.js";import"./SetGraphicalItem-CkM_d3EZ.js";import"./getZIndexFromUnknown-Gh_fwngg.js";import"./graphicalItemIdentity-CdZfZkJ-.js";import"./graphicalItemSelectors-sfhs_UqO.js";const Ye={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var m,n,p;t.parameters={...t.parameters,docs:{...(m=t.parameters)==null?void 0:m.docs,source:{originalSource:`{
  render: () => {
    const allKeys = Object.keys(pageData[0]);
    const [activeKeys, setActiveKeys] = useState(allKeys);

    /*
     * Toggles displayed bars when clicking on a legend item
     */
    const handleLegendClick: ComponentProps<typeof Legend>['onClick'] = (e: any) => {
      const key: string = e.dataKey;
      setActiveKeys(prev => prev.includes(key) ? prev.filter(k => k !== key) : [...prev, key]);
    };
    return <>
        <h4>
          Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if
          \`includeHidden\`
        </h4>
        <ResponsiveContainer width="100%" height={500}>
          <ComposedChart data={pageData}>
            <XAxis dataKey="name" scale="band" />
            <YAxis includeHidden />
            <Legend onClick={handleLegendClick} />
            <Bar dataKey="pv" fill="blue" hide={!activeKeys.includes('pv')} />
            <Bar dataKey="amt" fill="green" hide={!activeKeys.includes('amt')} />
          </ComposedChart>
        </ResponsiveContainer>
      </>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(p=(n=t.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};const He=["WithIncludeHidden"];export{t as WithIncludeHidden,He as __namedExportsOrder,Ye as default};
