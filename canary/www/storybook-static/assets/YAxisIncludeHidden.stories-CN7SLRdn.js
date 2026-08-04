import{r as f,R as e}from"./iframe-DpDTD0JG.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CwatvU9z.js";import{Y as l}from"./YAxis-tfWa7V5m.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-DGwVx7BW.js";import{C as k}from"./ComposedChart-B51SS0m3.js";import{X as K}from"./XAxis-DWjiAOFV.js";import{L as v}from"./Legend-S8MIn7rp.js";import{B as s}from"./Bar-1SOvljcW.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BwbI5cJ6.js";import"./Text-Bc5Ou4J8.js";import"./resolveDefaultProps-CxXNP2HM.js";import"./DOMUtils-3wivgqkH.js";import"./isWellBehavedNumber-DmMeAzDB.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DqWsyuzf.js";import"./index-DWuIzRsj.js";import"./index-Knde-ajF.js";import"./RechartsWrapper-BCxYcmRP.js";import"./index-B2s4Biye.js";import"./index-Cd_oQMUU.js";import"./throttle-DoBh-DCx.js";import"./renderedTicksSlice-BRwKivWp.js";import"./axisSelectors-Ck_lqLE7.js";import"./d3-scale-BfEaqYEJ.js";import"./CartesianAxis-C7YtKMNS.js";import"./Layer-lPi_1jCz.js";import"./types-C1vx5dmr.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./RechartsThemeContext-CVSBj4p3.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-BR7vTuCF.js";import"./chartDataContext-DFDKJiUi.js";import"./CategoricalChart-C6CLVh4_.js";import"./Symbols-BQPyP65-.js";import"./symbol-BtQR44l_.js";import"./path-DyVhHtw_.js";import"./useElementOffset-_vPtQ8Bj.js";import"./uniqBy-CidOEm7r.js";import"./iteratee-DOkUz8r4.js";import"./tooltipContext-CQ-6bB4h.js";import"./AnimatedItems-DlouAWba.js";import"./useAnimationId-NxcyCMrj.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-B6hULads.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-DCmpyR0n.js";import"./RegisterGraphicalItemId-4knkFaEt.js";import"./ErrorBarContext-pGcuO8rw.js";import"./GraphicalItemClipPath-Bu8PaL2p.js";import"./SetGraphicalItem-BR_9ARmo.js";import"./getZIndexFromUnknown-D4PbTgLv.js";import"./graphicalItemSelectors-Dnug8eAK.js";const be={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const Ye=["WithIncludeHidden"];export{t as WithIncludeHidden,Ye as __namedExportsOrder,be as default};
