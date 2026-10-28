import{R as e}from"./iframe-6K1b1-eT.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-ClhB_79n.js";import{R as h}from"./zIndexSlice-B780JRIC.js";import{C as g}from"./ComposedChart-B8GwPjuZ.js";import{L as x}from"./Line-CKyMQ0XF.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-vHo5DJBH.js";import{T as V}from"./Tooltip-BJDj-_ph.js";import"./preload-helper-Dp1pzeXC.js";import"./get-cF5BDHN6.js";import"./CartesianAxis-D2Tqoy9W.js";import"./Layer-CJqJ-HtM.js";import"./resolveDefaultProps-BYoWz9Yk.js";import"./Text-CdUlZS4M.js";import"./pageBackground-j7FwZ6MF.js";import"./ZIndexLayer-BCfq-6yJ.js";import"./index-Crbtmu02.js";import"./index-DtOoPLNq.js";import"./Label-BWjzWDJx.js";import"./PolarUtils-CTnnDHZv.js";import"./polarAxisSelectors-DAIX196M.js";import"./throttle-CBl9h_oH.js";import"./types-O5YDoWOS.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DsuMbTii.js";import"./index-fwe0fbm7.js";import"./index-C8-Ylk7e.js";import"./isBuffer-AZzsDYE7.js";import"./axisSelectors-C-rSKBiJ.js";import"./RechartsWrapper-DqVTXzd2.js";import"./index-EJ_yhvZY.js";import"./CartesianChart-Cvo7HdWy.js";import"./ZIndexPortal-wkZ6Ra_J.js";import"./CategoricalChart-CqHWKoUt.js";import"./Curve-BTrtI1QS.js";import"./step-nJPm-9z_.js";import"./path-DyVhHtw_.js";import"./LabelList-Da0m2dvB.js";import"./ActivePoints-DfBmAS04.js";import"./Dot-mjfNbHvX.js";import"./activeStyles-C1gmhpCf.js";import"./useAnimationId-DP-ttVRU.js";import"./dataEntryStyles-DGPpD66W.js";import"./Symbols-j-UxEopj.js";import"./symbol-Ccjplwna.js";import"./ErrorBarContext-BrR5ewV-.js";import"./SetGraphicalItem-CxuWSH9Y.js";import"./getRadiusAndStrokeWidthFromDot-9YrPK3Nw.js";import"./ActiveShapeUtils-9jaloMvW.js";import"./useEffectiveDataKey-Cqgp5Kke.js";import"./useElementOffset-c1RTDdmp.js";import"./uniqBy-OJKX_qkV.js";import"./iteratee-ItMtgKsp.js";import"./isArguments-yB-y1yaH.js";import"./Cross-pOdMossD.js";import"./Rectangle-BNPdRBQn.js";import"./util-Dxo8gN5i.js";import"./Sector-uQBxxe0t.js";const Pt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},jt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(u=(l=i.parameters)==null?void 0:l.docs)==null?void 0:u.source}}};var d,f,y;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        </ComposedChart>
      </ResponsiveContainer>;
  },
  parameters: {
    controls: {
      include: ['data']
    }
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,jt as __namedExportsOrder,Pt as default};
