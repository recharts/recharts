import{R as e}from"./iframe-C63NoaDu.js";import{t as m}from"./Time-CZh6Vidc.js";import{X as s}from"./XAxis-C5OImGrG.js";import{R as h}from"./zIndexSlice-BcMwSK9m.js";import{C as g}from"./ComposedChart-DM4H6PYa.js";import{L as x}from"./Line-CkUNS1k-.js";import{t as T,s as A,a as C,b as E,c as M,d as b,e as w,f as D,g as r}from"./d3-scale-CcYn43Vo.js";import{T as V}from"./Tooltip-CgKolB4i.js";import"./preload-helper-Dp1pzeXC.js";import"./get-C2VjdU0L.js";import"./CartesianAxis-BRA6gGeC.js";import"./Layer-Ckr3gw9l.js";import"./resolveDefaultProps-DjxgFVah.js";import"./Text-D_RBmkbp.js";import"./DOMUtils-DA0ZRZ5p.js";import"./isWellBehavedNumber-BfhF-72O.js";import"./useId-BncxSM4U.js";import"./useBackwardsCompatibleTheme-DEjA-f8D.js";import"./Label-1Vc72EU1.js";import"./PolarUtils-CTnnDHZv.js";import"./ZIndexLayer-Cc9mNp0T.js";import"./index-C9CjOEex.js";import"./index-8uJ0bE2o.js";import"./types-DUwSb1pu.js";import"./getClassNameFromUnknown-Jg1grEQN.js";import"./renderedTicksSlice-DIKEWQne.js";import"./throttle-dl1YLV6q.js";import"./index-DKS0oalo.js";import"./index-DO3tFlOP.js";import"./isBuffer-BG75eWKN.js";import"./RechartsWrapper-CTWFoE3n.js";import"./axisSelectors-LGmM4kiC.js";import"./index-CqricD4t.js";import"./CartesianChart-ENzs0KXc.js";import"./chartDataContext-CfPmzzSW.js";import"./CategoricalChart-DHxPQS0Z.js";import"./Curve-DkWZvTAe.js";import"./step-C-IAzoA3.js";import"./path-DyVhHtw_.js";import"./AnimatedItems-DHS6gEFX.js";import"./useAnimationId-DcWGIqWl.js";import"./ActivePoints-oZErJUce.js";import"./Dot-DkFiM3ON.js";import"./RegisterGraphicalItemId-CrhgcGtn.js";import"./ErrorBarContext-DjLWgwQU.js";import"./GraphicalItemClipPath-DNBzuX5X.js";import"./SetGraphicalItem-CsljS9zr.js";import"./getRadiusAndStrokeWidthFromDot-DGM-tqki.js";import"./ActiveShapeUtils-DIOp6OW3.js";import"./useGraphicalItemIdentity-WzLoYH7A.js";import"./useElementOffset-Dr9avRqD.js";import"./uniqBy-C3wZtJ5H.js";import"./iteratee-QeKIrUD3.js";import"./Cross-DRnNZ4Nx.js";import"./Rectangle-CvaDc6LC.js";import"./util-Dxo8gN5i.js";import"./Sector-bzDCgzGc.js";const qt={component:s},S={render:t=>e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,domain:["auto","auto"]}),e.createElement(x,{dataKey:"y"}))),args:{data:m}},i={...S,parameters:{controls:{include:["type","scale","domain","data"]}},argTypes:{scale:{options:[void 0,"auto","ordinal","time","point","linear"],control:{type:"radio"}},type:{options:[void 0,"category","number"],control:{type:"radio"}}}},k=r(".%L"),O=r(":%S"),K=r("%I:%M"),R=r("%I %p"),F=r("%a %d"),L=r("%b %d"),W=r("%B"),X=r("%Y");function B(t){return A(t)<t?k(t):C(t)<t?O(t):E(t)<t?K(t):M(t)<t?R(t):b(t)<t?w(t)<t?F(t):L(t):D(t)<t?W(t):X(t)}const a={...S,render:t=>{const p=t.data.map(o=>o.x).map(o=>o.valueOf()),n=T().domain([Math.min(...p),Math.max(...p)]).nice(),v={domain:n.domain().map(o=>o.valueOf()),scale:n,type:"number",ticks:n.ticks(5).map(o=>o.valueOf()),tickFormatter:B};return e.createElement(h,{width:"100%",height:400},e.createElement(g,{data:m,margin:{top:20,right:20,bottom:20,left:20}},e.createElement(s,{dataKey:"x",...t,...v}),e.createElement(x,{dataKey:"y"}),e.createElement(V,null)))},parameters:{controls:{include:["data"]}}},Pt=["DefaultBehaviour","WithD3Scale"];var c,l,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};export{i as DefaultBehaviour,a as WithD3Scale,Pt as __namedExportsOrder,qt as default};
