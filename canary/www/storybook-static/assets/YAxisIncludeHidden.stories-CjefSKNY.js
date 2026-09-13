import{r as f,R as e}from"./iframe-GEWoEgYU.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-Do1ezRev.js";import{p as n}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-m50y9bt7.js";import{C as k}from"./ComposedChart-CcuEmYol.js";import{X as K}from"./XAxis-BNnHyyR6.js";import{L as v}from"./Legend-Baxiyi7r.js";import{B as a}from"./Bar-DZW2Q8dy.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BrqW8KDJ.js";import"./Text-DisRgGpM.js";import"./resolveDefaultProps-DpAlDskP.js";import"./DOMUtils-_s9ELKXC.js";import"./isWellBehavedNumber-Btl-gf2F.js";import"./useId-CSqY47p_.js";import"./useBackwardsCompatibleTheme-CDx1dLi4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-UqU4qgkO.js";import"./index-jF3_l_DR.js";import"./index-BmM7Rlr-.js";import"./RechartsWrapper-DUhcDKTP.js";import"./axisSelectors-3BecUZh2.js";import"./throttle-DQWr01n7.js";import"./d3-scale-DtRX2T9P.js";import"./index-BTro793U.js";import"./index-BkcefAXR.js";import"./renderedTicksSlice-Cm6mh1F9.js";import"./index-xNr63OGc.js";import"./CartesianAxis-DN5o5nX3.js";import"./Layer-B28G2hIY.js";import"./types-BibJ3Nmg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D7rp_ejt.js";import"./chartDataContext-BO36yNvS.js";import"./CategoricalChart-B9B91N22.js";import"./Symbols-BS2jIWeJ.js";import"./symbol-CcpcFect.js";import"./path-DyVhHtw_.js";import"./useElementOffset-sZ_quz8S.js";import"./uniqBy-D4LQ95gw.js";import"./iteratee-uHmSd5oe.js";import"./AnimatedItems-BGlMg_gS.js";import"./useAnimationId-DCtzAZ-Q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CjQE5fD5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bfg_gjnw.js";import"./tooltipContext-Nw3ArW6V.js";import"./RegisterGraphicalItemId-oyNCw2MY.js";import"./ErrorBarContext-n9OrelsP.js";import"./GraphicalItemClipPath-CQvdMfqc.js";import"./SetGraphicalItem-CiQmIVfI.js";import"./getZIndexFromUnknown-L23tBRxe.js";import"./useGraphicalItemIdentity-CuKg9Fcq.js";const He={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(n[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:n},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(a,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(a,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)},Le=["WithIncludeHidden"];var s,m,p;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};export{t as WithIncludeHidden,Le as __namedExportsOrder,He as default};
