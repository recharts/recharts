import{r as f,R as e}from"./iframe-C0ZUsupJ.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-DiMOUlNc.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-OijFhdu6.js";import{C as k}from"./ComposedChart-9XUsCVAP.js";import{X as K}from"./XAxis-CEau4At0.js";import{L as v}from"./Legend-BfLB5vxU.js";import{B as s}from"./Bar-BBRc8JX9.js";import"./preload-helper-Dp1pzeXC.js";import"./get-DKb0zYvY.js";import"./CartesianAxis-CRBuloTO.js";import"./Layer-BvM0W8cF.js";import"./resolveDefaultProps-CFzFI254.js";import"./Text-Rgvblv2w.js";import"./DOMUtils-C2N7ljjM.js";import"./isWellBehavedNumber-DY6SAaVJ.js";import"./Label-zyObFa2R.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-BTGgoWh-.js";import"./index-CWmFnIlt.js";import"./index-qQ2Np5IV.js";import"./types-BB9QSyE9.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-CdGxqG4t.js";import"./throttle-C0jUqI7U.js";import"./RechartsWrapper-BP4cUW8r.js";import"./index-DMeIlV1g.js";import"./index-TZ5Clshf.js";import"./axisSelectors-DBehuelT.js";import"./d3-scale-Cab4s2n5.js";import"./CartesianChart-SF4H61CS.js";import"./chartDataContext-DULpfCbg.js";import"./CategoricalChart-BnZfW2OJ.js";import"./Symbols-B_Nb5BWp.js";import"./symbol-h31kQWcA.js";import"./path-DyVhHtw_.js";import"./useElementOffset-DXpEJJ9m.js";import"./uniqBy-CHbMoB0U.js";import"./iteratee-DUmd7r17.js";import"./tooltipContext-FdpIVrln.js";import"./AnimatedItems-BucsPXo8.js";import"./useAnimationId-gV_9QBVg.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-D83EpkfQ.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-qSpTYyL4.js";import"./RegisterGraphicalItemId-kZ3u-TBa.js";import"./ErrorBarContext-CryOhevP.js";import"./GraphicalItemClipPath-CYUXkmtT.js";import"./SetGraphicalItem-BrVQB63z.js";import"./getZIndexFromUnknown-DCjzFGbo.js";import"./graphicalItemSelectors-BXWdu7mn.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
