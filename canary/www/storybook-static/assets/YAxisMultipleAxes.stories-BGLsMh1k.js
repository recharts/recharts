import{R as t}from"./iframe-GEWoEgYU.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as p}from"./YAxisArgs-CwatvU9z.js";import{Y as r}from"./YAxis-Do1ezRev.js";import{R as l}from"./zIndexSlice-m50y9bt7.js";import{C as x}from"./ComposedChart-CcuEmYol.js";import{p as A}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DZW2Q8dy.js";import{L as a}from"./Line-JrrQ0b5K.js";import{X as c}from"./XAxis-BNnHyyR6.js";import{T as g}from"./Tooltip-BAVFGGcA.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./Label-BrqW8KDJ.js";import"./Text-DisRgGpM.js";import"./resolveDefaultProps-DpAlDskP.js";import"./DOMUtils-_s9ELKXC.js";import"./isWellBehavedNumber-Btl-gf2F.js";import"./useId-CSqY47p_.js";import"./useBackwardsCompatibleTheme-CDx1dLi4.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-UqU4qgkO.js";import"./index-jF3_l_DR.js";import"./index-BmM7Rlr-.js";import"./RechartsWrapper-DUhcDKTP.js";import"./axisSelectors-3BecUZh2.js";import"./throttle-DQWr01n7.js";import"./d3-scale-DtRX2T9P.js";import"./index-BTro793U.js";import"./index-BkcefAXR.js";import"./renderedTicksSlice-Cm6mh1F9.js";import"./index-xNr63OGc.js";import"./CartesianAxis-DN5o5nX3.js";import"./Layer-B28G2hIY.js";import"./types-BibJ3Nmg.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./isBuffer-BG75eWKN.js";import"./CartesianChart-D7rp_ejt.js";import"./chartDataContext-BO36yNvS.js";import"./CategoricalChart-B9B91N22.js";import"./AnimatedItems-BGlMg_gS.js";import"./useAnimationId-DCtzAZ-Q.js";import"./tiny-invariant-CopsF_GD.js";import"./Rectangle-CjQE5fD5.js";import"./util-Dxo8gN5i.js";import"./ActiveShapeUtils-Bfg_gjnw.js";import"./tooltipContext-Nw3ArW6V.js";import"./RegisterGraphicalItemId-oyNCw2MY.js";import"./ErrorBarContext-n9OrelsP.js";import"./GraphicalItemClipPath-CQvdMfqc.js";import"./SetGraphicalItem-CiQmIVfI.js";import"./getZIndexFromUnknown-L23tBRxe.js";import"./useGraphicalItemIdentity-CuKg9Fcq.js";import"./Curve-BIh3ht4a.js";import"./step-CWzaE13R.js";import"./path-DyVhHtw_.js";import"./ActivePoints-DTY2TMLV.js";import"./Dot-DbC-8y4h.js";import"./getRadiusAndStrokeWidthFromDot-COR5YxZm.js";import"./useElementOffset-sZ_quz8S.js";import"./uniqBy-D4LQ95gw.js";import"./iteratee-uHmSd5oe.js";import"./Cross-BeFe6Kls.js";import"./Sector-DKArG2GN.js";const Mt={component:r,argTypes:p,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},e={render:i=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:A},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(c,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...i,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...i,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...i,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(p)},Rt=["WithLeftAndRightAxes"];var n,m,s;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  render: (args: Args) => {
    return <article style={{
      display: 'flex',
      flexDirection: 'column'
    }}>
        <div style={{
        width: '100%'
      }}>
          <ResponsiveContainer width="100%" height={500}>
            <ComposedChart data={pageData}>
              <Bar dataKey="pv" fill="red" yAxisId="right" />
              <Bar dataKey="uv" fill="red" yAxisId="right-mirror" />
              <Line dataKey="amt" fill="green" yAxisId="left" />
              <Line dataKey="amt" fill="green" yAxisId="left-mirror" />

              <XAxis padding={{
              left: 50,
              right: 50
            }} dataKey="name" scale="band" />
              <YAxis {...args} yAxisId="left" orientation="left" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="left-mirror" orientation="left" mirror tickCount={8} />
              <YAxis {...args} yAxisId="right" orientation="right" domain={['dataMin-20', 'dataMax']} />
              <YAxis {...args} yAxisId="right-mirror" orientation="right" mirror tickCount={20} />

              <Tooltip />
            </ComposedChart>
          </ResponsiveContainer>
        </div>
        <h4>
          {\`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element\`}
        </h4>
      </article>;
  },
  args: getStoryArgsFromArgsTypesObject(YAxisArgs)
}`,...(s=(m=e.parameters)==null?void 0:m.docs)==null?void 0:s.source}}};export{e as WithLeftAndRightAxes,Rt as __namedExportsOrder,Mt as default};
