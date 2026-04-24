import{e as t}from"./iframe-iXVZ0OWw.js";import{g as d}from"./utils-ePvtT4un.js";import{Y as n}from"./YAxisArgs-CS8VIEtE.js";import{Y as r}from"./YAxis-BONLIFGC.js";import{R as l}from"./arrayEqualityCheck-Bs7awETv.js";import{C as x}from"./ComposedChart-D42n6zmq.js";import{p as c}from"./Page-Cj8EiXz7.js";import{B as o}from"./Bar-DpPX3MhS.js";import{L as a}from"./Line-CCH_s4P0.js";import{X as A}from"./XAxis-Y2bxQYNa.js";import{T as g}from"./Tooltip-BS81PQjT.js";import{R as f}from"./RechartsHookInspector-QPfA1UiQ.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-8r9ztVGp.js";import"./Layer-CGbljtJR.js";import"./resolveDefaultProps-DZrbJThI.js";import"./Text-BTO53QFq.js";import"./DOMUtils-BF1xhoe1.js";import"./Label-DFdLWFZO.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Bsv83kPu.js";import"./zIndexSlice-D699PQjh.js";import"./immer-D9XbeXAx.js";import"./types-BHwUrVE7.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CFlbd-Pg.js";import"./hooks-hExiU42m.js";import"./axisSelectors-C0i3ctr0.js";import"./d3-scale-CKEOWdk4.js";import"./RechartsWrapper-Al7ZScv5.js";import"./index-P8miOr9q.js";import"./CartesianChart-CmpgeL8p.js";import"./chartDataContext-BSmZPOfG.js";import"./CategoricalChart-C87NLSKj.js";import"./tooltipContext-BuOnD9f8.js";import"./ReactUtils-DHe6gE8g.js";import"./tiny-invariant-CopsF_GD.js";import"./ActiveShapeUtils-DLIttevF.js";import"./isPlainObject-C5HoPG-J.js";import"./isPlainObject-BSutPv-K.js";import"./Rectangle-DSd4AbXR.js";import"./useAnimationId-B_Uu5T7V.js";import"./Trapezoid-CQSpJBVW.js";import"./Sector-BBLCd5Jd.js";import"./Symbols-vgP9iBxE.js";import"./symbol-C3fUoARJ.js";import"./step-C3QbnIY1.js";import"./Curve-8m_6XEtl.js";import"./RegisterGraphicalItemId-BvNsmO5D.js";import"./ErrorBarContext-Bl38LcUT.js";import"./GraphicalItemClipPath-CbkDaRj8.js";import"./SetGraphicalItem-BA2l-KDv.js";import"./getZIndexFromUnknown-B_TEGjvf.js";import"./graphicalItemSelectors-Sfmz7aRe.js";import"./ActivePoints-DfTTcs7z.js";import"./Dot-CCBlTxNb.js";import"./getRadiusAndStrokeWidthFromDot-BSnUDXXs.js";import"./useElementOffset-BsJy2Y1x.js";import"./uniqBy-KdXgrzGA.js";import"./iteratee-DJziDCBj.js";import"./Cross-DFdjHzjq.js";import"./index-czQzbvEN.js";import"./ChartSizeDimensions-iHbrzIWQ.js";import"./OffsetShower-dcduOxOC.js";import"./PlotAreaShower-BzP3r89Q.js";const kt={component:r,argTypes:n,title:"Examples/cartesian/YAxis/WithLeftAndRightAxes"},i={render:e=>t.createElement("article",{style:{display:"flex",flexDirection:"column"}},t.createElement("div",{style:{width:"100%"}},t.createElement(l,{width:"100%",height:500},t.createElement(x,{data:c},t.createElement(o,{dataKey:"pv",fill:"red",yAxisId:"right"}),t.createElement(o,{dataKey:"uv",fill:"red",yAxisId:"right-mirror"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left"}),t.createElement(a,{dataKey:"amt",fill:"green",yAxisId:"left-mirror"}),t.createElement(A,{padding:{left:50,right:50},dataKey:"name",scale:"band"}),t.createElement(r,{...e,yAxisId:"left",orientation:"left",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"left-mirror",orientation:"left",mirror:!0,tickCount:8}),t.createElement(r,{...e,yAxisId:"right",orientation:"right",domain:["dataMin-20","dataMax"]}),t.createElement(r,{...e,yAxisId:"right-mirror",orientation:"right",mirror:!0,tickCount:20}),t.createElement(g,null),t.createElement(f,null)))),t.createElement("h4",null,`When an AxisId is specified on all provided axes of one type (XAxis, YAxis, ZAxis), recharts requires a
      {x,y,z}AxisId on the corresponding graphical element`)),args:d(n)};var m,s,p;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
              <RechartsHookInspector />
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
}`,...(p=(s=i.parameters)==null?void 0:s.docs)==null?void 0:p.source}}};const Tt=["WithLeftAndRightAxes"];export{i as WithLeftAndRightAxes,Tt as __namedExportsOrder,kt as default};
