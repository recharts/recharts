import{r as f,R as e}from"./iframe-_oCKXQQT.js";import{g as A}from"./utils-ePvtT4un.js";import{Y as d}from"./YAxisArgs-CS8VIEtE.js";import{Y as l}from"./YAxis-pBFniQdP.js";import{p as a}from"./Page-Cj8EiXz7.js";import{R as C}from"./zIndexSlice-Dq64QlX1.js";import{C as k}from"./ComposedChart-Doh5buxK.js";import{X as K}from"./XAxis-D3L4SFSq.js";import{L as v}from"./Legend-CxXOfWWb.js";import{B as s}from"./Bar-iq9J0QlP.js";import"./preload-helper-Dp1pzeXC.js";import"./get-Dgc8xSDl.js";import"./CartesianAxis--Lh3QzvY.js";import"./Layer-BtAMG36m.js";import"./resolveDefaultProps-D-cNYr8U.js";import"./Text-CaXzzKZw.js";import"./DOMUtils-BvVxKZ4D.js";import"./isWellBehavedNumber-B9wxNRPu.js";import"./Label-DrF3NWpt.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DUuDPJyN.js";import"./index-eQFvDN2n.js";import"./index-BhdyHQ9q.js";import"./types-C2uV_Cvt.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-BRr9Mzxw.js";import"./throttle-BQ_gnI8m.js";import"./RechartsWrapper-BkeUzj5p.js";import"./index-6i1k6cIu.js";import"./index-DYTqQgsI.js";import"./axisSelectors-DIl8ejt1.js";import"./d3-scale-DRcGFkfh.js";import"./CartesianChart-Br7CcIjd.js";import"./chartDataContext-DAy8Squq.js";import"./CategoricalChart-CepUJJer.js";import"./Symbols-C3XKYUvU.js";import"./symbol-Kk4TNAEo.js";import"./path-DyVhHtw_.js";import"./useElementOffset-CeTWjI2A.js";import"./uniqBy-CTI2mupa.js";import"./iteratee-2tW9rS6f.js";import"./tooltipContext-D56Y1KI-.js";import"./AnimatedItems-CmMbILYr.js";import"./useAnimationId-CObBJ0f9.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-BxnTCKGy.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-CrKU6_AB.js";import"./RegisterGraphicalItemId-43VeAxEX.js";import"./ErrorBarContext-C6Mh3zEx.js";import"./GraphicalItemClipPath-BiS7z6q5.js";import"./SetGraphicalItem-jz90sZeJ.js";import"./getZIndexFromUnknown-DQk5nsuk.js";import"./graphicalItemSelectors-CH5-FBeI.js";const xe={component:l,argTypes:d,title:"Examples/cartesian/YAxis/WithIncludeHidden"},t={render:()=>{const c=Object.keys(a[0]),[o,g]=f.useState(c),y=h=>{const i=h.dataKey;g(r=>r.includes(i)?r.filter(u=>u!==i):[...r,i])};return e.createElement(e.Fragment,null,e.createElement("h4",null,"Click on the legend items to toggle their bars on and off, and notice how the YAxis domain stays the same, if `includeHidden`"),e.createElement(C,{width:"100%",height:500},e.createElement(k,{data:a},e.createElement(K,{dataKey:"name",scale:"band"}),e.createElement(l,{includeHidden:!0}),e.createElement(v,{onClick:y}),e.createElement(s,{dataKey:"pv",fill:"blue",hide:!o.includes("pv")}),e.createElement(s,{dataKey:"amt",fill:"green",hide:!o.includes("amt")}))))},args:A(d)};var n,m,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
