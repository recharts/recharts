import{e}from"./iframe-Dnf4AlLR.js";import{t as n}from"./Time-D4Einjlh.js";import{X as s}from"./XAxis-DLWfACul.js";import{g as y}from"./arrayEqualityCheck-UrcKYzS0.js";import{C as g}from"./ComposedChart-B93d8mqD.js";import{L as x}from"./Line-rMlsh7WZ.js";import{R as S}from"./RechartsHookInspector-OLBh2oCI.js";import{t as T,s as A,f as C,e as M,b,g as k,h as w,i as D,c as r}from"./d3-scale-Cb8N1VfB.js";import{T as V}from"./Tooltip-DG62CmJD.js";import"./preload-helper-Dp1pzeXC.js";import"./clsx-B-dksMZM.js";import"./CartesianAxis-DIOPUoh9.js";import"./Layer-V8ImnEZB.js";import"./resolveDefaultProps-BqkLROOU.js";import"./Text-BH203wB1.js";import"./DOMUtils-DeOIiqB-.js";import"./Label-B_crGnD8.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-DOX2ldNu.js";import"./zIndexSlice-BgXAgJL3.js";import"./immer-DA9BPlnc.js";import"./types-DHYQQjs9.js";import"./getClassNameFromUnknown-Dbzh2npV.js";import"./renderedTicksSlice-CTDdadeF.js";import"./hooks-ByMCROpL.js";import"./axisSelectors-VRydpu3s.js";import"./RechartsWrapper-DAmqBWgG.js";import"./index-D1BDiruz.js";import"./CartesianChart-CTkTDluY.js";import"./chartDataContext-D6OzkCBP.js";import"./CategoricalChart-DESZNtyF.js";import"./Curve-Ca-XrmBQ.js";import"./step-BhFSNpdr.js";import"./path-DyVhHtw_.js";import"./ReactUtils-C1SR2qhB.js";import"./ActivePoints-DtjEEYK2.js";import"./Dot-2Bj9Ykgw.js";import"./RegisterGraphicalItemId-26wIU3J0.js";import"./ErrorBarContext-DnPqunZ7.js";import"./GraphicalItemClipPath-u2mX7OG7.js";import"./SetGraphicalItem-B1dso5Ln.js";import"./useAnimationId-Bo3VYg8c.js";import"./getRadiusAndStrokeWidthFromDot-DUWC1cP5.js";import"./ActiveShapeUtils-D2qQQTmk.js";import"./index-DhYdY39W.js";import"./ChartSizeDimensions-xg99Q5LG.js";import"./OffsetShower-CsmBnO90.js";import"./PlotAreaShower-CowJNvBY.js";import"./useElementOffset-DRm8R7N4.js";import"./uniqBy-CLeN_urr.js";import"./iteratee-C1XNdihg.js";import"./Cross-BlvpUcTZ.js";import"./Rectangle-cwzKaFgR.js";import"./Sector-DaxOCZK_.js";const Yt={component:s},v={render:t=>e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}),e.createElement(S,null))),args:{data:n}},a={...v,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},O=r(".%L"),K=r(":%S"),R=r("%I:%M"),F=r("%I %p"),H=r("%a %d"),I=r("%b %d"),L=r("%B"),W=r("%Y");function X(t){return A(t)<t?O(t):C(t)<t?K(t):M(t)<t?R(t):b(t)<t?F(t):k(t)<t?w(t)<t?H(t):I(t):D(t)<t?L(t):W(t)}const i={...v,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),m=T().domain([Math.min(...p),Math.max(...p)]).nice(),E={domain:m.domain().map(o=>o.valueOf()),scale:m,type:"number",ticks:m.ticks(5).map(o=>o.valueOf()),tickFormatter:X};return e.createElement(y,{width:"100%",height:400},e.createElement(g,{data:n,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...E}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null),e.createElement(S,null)))},parameters:{controls:{include:["data"]}}};var c,l,u;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  ...StoryTemplate,
  parameters: {
    controls: {
      include: ['type', 'scale', 'domain', 'data']
    }
  },
  argTypes: {
    scale: {
      options: [undefined, 'auto', 'ordinal', 'time', 'point', 'linear'],
      control: {
        type: 'radio'
      }
    },
    type: {
      options: [undefined, 'category', 'number'],
      control: {
        type: 'radio'
      }
    }
  }
}`,...(u=(l=a.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,h;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  ...StoryTemplate,
  render: (args: Args) => {
    const timeValues = args.data.map(row => row.x);
    // The d3 scaleTime domain requires numeric values
    const numericValues = timeValues.map(time => time.valueOf());
    // With .nice() we extend the domain nicely.
    const timeScale = scaleTime().domain([Math.min(...numericValues), Math.max(...numericValues)]).nice();
    const xAxisArgs: XAxisProps = {
      domain: timeScale.domain().map(date => date.valueOf()),
      // @ts-expect-error we need to wrap the d3 scales in unified interface
      scale: timeScale,
      type: 'number',
      ticks: timeScale.ticks(5).map(date => date.valueOf()),
      tickFormatter: multiFormat
    };
    return <ResponsiveContainer width="100%" height={400}>
        <ComposedChart data={timeData} margin={{
        top: 20,
        right: 20,
        bottom: 20,
        left: 20
      }}>
          <XAxis dataKey="x" {...args} {...xAxisArgs} />
          <Line dataKey="y" />
          <Tooltip />
          <RechartsHookInspector />
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(h=(f=i.parameters)==null?void 0:f.docs)==null?void 0:h.source}}};const _t=["DefaultBehaviour","WithD3Scale"];export{a as DefaultBehaviour,i as WithD3Scale,_t as __namedExportsOrder,Yt as default};
