import{P as f,c as e}from"./iframe-eXOzs3YY.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as c}from"./YAxis-DwsIXpqe.js";import{p as a}from"./Page-DPte-9pC.js";import{g as C}from"./zIndexSlice-CuY-7AxA.js";import{C as k}from"./ComposedChart-zMtNTxE8.js";import{X as K}from"./XAxis-25xD-jfg.js";import{L as v}from"./Legend-B-Fh9yJv.js";import{B as s}from"./Bar-B2_wVvYh.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DyNLp3_i.js";import"./CartesianAxis-DRLBBJED.js";import"./Layer-VPMddfpg.js";import"./resolveDefaultProps-DFOijNU4.js";import"./Text-Geh_dgxu.js";import"./DOMUtils-CZvt8Baf.js";import"./isWellBehavedNumber-AEitUNgh.js";import"./Label-A2hDBNkM.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-NeCcTin-.js";import"./index-C3pdYAEU.js";import"./index-BeZCe1sB.js";import"./types-ty1UrU8J.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-Bq0EglVk.js";import"./immer-DwC3AsAE.js";import"./RechartsWrapper-BX65N_tr.js";import"./index-DS3rRRFa.js";import"./index-CIP6DqMy.js";import"./axisSelectors-2h318yzI.js";import"./d3-scale-CfOtqMhF.js";import"./CartesianChart-BbQfwcfl.js";import"./chartDataContext-CxkR6oQJ.js";import"./CategoricalChart-DeYGfYtA.js";import"./Symbols-CagsXnZZ.js";import"./symbol-Di5n8hly.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DDmKHRD5.js";import"./uniqBy-ZzENiDFV.js";import"./iteratee-KW00BhH9.js";import"./tooltipContext-8A5g5vWG.js";import"./ReactUtils-C6uVGLKp.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B8la5sgf.js";import"./useAnimationId-B5pCqy41.js";import"./ActiveShapeUtils-DIEuoF9z.js";import"./RegisterGraphicalItemId-qKqyupEJ.js";import"./ErrorBarContext-C69bYVo4.js";import"./GraphicalItemClipPath-BFD_fJ-h.js";import"./SetGraphicalItem-CWrfv76Z.js";import"./getZIndexFromUnknown-rKE-_to_.js";import"./graphicalItemSelectors--zOGyG2I.js";const ve={component:c,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const l=Object.keys(a[0]),[o,g]=f.useState(l),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(c,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const xe=["WithIncludeHidden"];export{t as WithIncludeHidden,xe as __namedExportsOrder,ve as default};
