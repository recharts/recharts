import{r as f,R as e}from"./iframe-BFQyqMbU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-Cz8KrmGC.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-jJ_CaBDo.js";import{C as k}from"./ComposedChart-Pdj8BLwD.js";import{X as K}from"./XAxis-Db3L_JCQ.js";import{L as v}from"./Legend-BXiztOAE.js";import{B as s}from"./Bar-DC-h1kcG.js";import"./preload-helper-Dp1pzeXC.js";import"./get-p4pcudXd.js";import"./CartesianAxis-JBeJCkI-.js";import"./Layer-BpUtlx2X.js";import"./resolveDefaultProps-B_ssPDKF.js";import"./Text-BMugx81A.js";import"./DOMUtils-CzHwSZC9.js";import"./isWellBehavedNumber-CXuZhh3h.js";import"./Label-BBfCiCQ6.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DPawcbSR.js";import"./index-lcxumIdx.js";import"./index-yqk7rkqd.js";import"./types-cy48Xvgh.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-HnYJqdGr.js";import"./immer--b20-lFI.js";import"./RechartsWrapper-BounuTKv.js";import"./index-CDKHoQ9z.js";import"./index-Gba51aKu.js";import"./axisSelectors-CRFbB7ND.js";import"./d3-scale--vDRC-Zz.js";import"./CartesianChart-qgf-TM4c.js";import"./chartDataContext-BM8qcz36.js";import"./CategoricalChart-FqadQC9J.js";import"./Symbols-B2TF9-Ed.js";import"./symbol-DiXwW3Zb.js";import"./path-DyVhHtw_.js";import"./useElementOffset-iy_d7mMM.js";import"./uniqBy-w3S1ilQh.js";import"./iteratee-cMb-fu6v.js";import"./tooltipContext-DfgQTVQM.js";import"./AnimatedItems-BA8IgjUl.js";import"./useAnimationId-D_DRQ5ok.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CLh9RCDA.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-BDWRsG1S.js";import"./RegisterGraphicalItemId-BEWz97Wy.js";import"./ErrorBarContext-CGoKUjs6.js";import"./GraphicalItemClipPath-B53LZcY2.js";import"./SetGraphicalItem-D0WJt6mF.js";import"./getZIndexFromUnknown-DoUTtBWJ.js";import"./graphicalItemSelectors-Bgaf2_KE.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ee=["WithIncludeHidden"];export{t as WithIncludeHidden,Ee as __namedExportsOrder,xe as default};
